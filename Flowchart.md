# Data Ingestion & Compliance Workflow

```mermaid
flowchart TD

    A[Email / Slack <br> JSON Input] --> B[Ingestion (REST)]
    B --> C[JSON Validation (Schema)]

    C -- invalid --> D[Audit Log (Validation)]
    C -- valid --> E[Normalization <br>(Canonical Schema Conversion → Elastic)]

    E --> F[Deduplication]
    F -- duplicate --> G[Storage Layer <br>• Raw JSON → Disk (file) <br>• Indexed → Elasticsearch <br>Immutability (support with audit data)]
    F -- new --> G

    G --> H[Compliance Policy Engine <br>Mongo (Regex Evaluation)]

    H -- match --> I[Flagged Messages → PostgreSQL <br>(Review API - GET Method)]
    H -- no match --> J[Audit Logging (Mongo) <br>Every step logged]

    I --> J
    D --> J
