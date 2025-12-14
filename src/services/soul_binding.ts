import { Connection, PublicKey, Transaction, SystemProgram, Keypair } from '@solana/web3.js'
import {
  TOKEN_2022_PROGRAM_ID,
  createMint,
  getAssociatedTokenAddress,
  createInitializeNonTransferableMintInstruction,
  MINT_SIZE,
  getMinimumBalanceForRentExemptMint,
  createInitializeMint2Instruction,
  createAssociatedTokenAccountInstruction,
  createMintToInstruction,
} from '@solana/spl-token'

export interface BindResult {
  soulMint: PublicKey
  ata: PublicKey
  tx: string
}

export async function bindCreatorSoul(connection: Connection, creatorPubkey: PublicKey, signAndSend: (tx: Transaction) => Promise<string>): Promise<BindResult> {
  const soulMint = Keypair.generate()

  const rent = await getMinimumBalanceForRentExemptMint(connection)
  const ata = await getAssociatedTokenAddress(soulMint.publicKey, creatorPubkey, false, TOKEN_2022_PROGRAM_ID)

  const tx = new Transaction()

  // Create mint account
  tx.add(SystemProgram.createAccount({
    fromPubkey: creatorPubkey,
    newAccountPubkey: soulMint.publicKey,
    lamports: rent,
    space: MINT_SIZE,
    programId: TOKEN_2022_PROGRAM_ID,
  }))

  // Initialize Non-Transferable extension
  tx.add(createInitializeNonTransferableMintInstruction(soulMint.publicKey, TOKEN_2022_PROGRAM_ID))

  // Initialize mint (decimals: 0)
  tx.add(createInitializeMint2Instruction(soulMint.publicKey, 0, creatorPubkey, null, TOKEN_2022_PROGRAM_ID))

  // Create ATA
  tx.add(createAssociatedTokenAccountInstruction(creatorPubkey, ata, creatorPubkey, soulMint.publicKey, TOKEN_2022_PROGRAM_ID))

  // Mint 1 token to creator
  tx.add(createMintToInstruction(soulMint.publicKey, ata, creatorPubkey, 1, [], TOKEN_2022_PROGRAM_ID))

  // Optional: on-chain memo for audit (creator|mint)
  // You can add memo program instruction here if desired

  // Partial sign with mint keypair
  tx.partialSign(soulMint)

  const sig = await signAndSend(tx)

  return { soulMint: soulMint.publicKey, ata, tx: sig }
}

export async function verifyBinding(connection: Connection, creator: PublicKey, soulMint: PublicKey): Promise<boolean> {
  const ata = await getAssociatedTokenAddress(soulMint, creator, false, TOKEN_2022_PROGRAM_ID)
  const acc = await connection.getTokenAccountBalance(ata, 'confirmed')
  return acc?.value?.amount === '1'
}
