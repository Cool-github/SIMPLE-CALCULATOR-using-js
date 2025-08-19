# Data Ingestion & Compliance Workflow

## Mermaid Flowchart (GitHub Rendered)

```mermaid
flowchart TD
    A[Email / Slack \n JSON Input] --> B[Ingestion (REST)]
    B --> C[JSON Validation (Schema)]

    C -- invalid --> D[Audit Log (Validation)]
    C -- valid --> E[Normalization \n (Canonical Schema Conversion to Elastic)]

    E --> F[Deduplication]
    F -- duplicate --> G[Storage Layer \n Raw JSON → Disk (file) \n Indexed → Elasticsearch \n Immutability (audit data)]
    F -- new --> G

    G --> H[Compliance Policy Engine \n Mongo (Regex Evaluation)]

    H -- match --> I[Flagged Messages \n PostgreSQL (Review API - GET Method)]
    H -- no match --> J[Audit Logging (Mongo) \n Every step logged]

    I --> J
    D --> J
