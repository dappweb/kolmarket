## 2025-02-17 - Missing Form Label Associations
**Learning:** The application frequently uses visual labels (text in `div` or `label` tags) without programmatic association (`htmlFor`/`id`) to their corresponding inputs. This is common in the `TokenLaunchpad` and `InfluenceMarket` components.
**Action:** When creating or modifying forms, always ensure explicit association using `htmlFor` on the label and `id` on the input, or wrap the input within the label.
