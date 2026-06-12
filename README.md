<img width="1024" height="559" alt="image" src="https://github.com/user-attachments/assets/18cfa148-7e42-4ba3-9880-7789dfcd2219" />

## AI-Powered Audio Transcription & Contextual Cleanup Tool
An enterprise-grade, hybrid pipeline that ingests raw audio files, manages orchestration streams, performs high-accuracy AI transcription, and applies intelligent contextual cleanup to eliminate filler words, formatting artifacts, and structural noise.

### 📖 Table of Contents
1. About the Project
2. Architecture Overview
3. Tech Stack
4. Getting Started
5. Project Roadmap
6. Contributing

### 🚀 About the Project
Processing raw audio for ingestion into downstream AI applications (like RAG pipelines or LLMs) often suffers from runtime execution bugs, massive file overhead, and messy transcript outputs containing stutters, filler words, or speech-to-text formatting anomalies.

This tool provides a highly robust, multi-layer solution:

The TypeScript Integration Layer: Handled by a single-threaded, non-blocking Node.js environment to safely scan, ingest, and stream local files without memory leaks or process stalls.

The Python Core AI Pipeline: An asynchronous, high-performance execution engine that runs transcription models, splits workloads into vector embeddings, and applies complex agentic cleanup logic.

### 🛠 Architecture Overview
The system is split cleanly into a decoupled, microservices-inspired boundary:
<img width="1024" height="559" alt="image" src="https://github.com/user-attachments/assets/2f9962ca-d8b7-490b-a91c-63c5a8efb574" />

### 💻 Tech Stack

**Backend Integration & Edge Layer**
* **Runtime**: Node.js (v20+ ESM)
* **Language**: TypeScript
* **Core Modules**: Native `node:fs/promises`, `node:path`

**Core AI Pipeline**
* **Framewor**k: FastAPI
* **Orchestration**: LangChain / PydanticAI
* **Database:** PostgreSQL with `pgvector` (Unified relational & vector storage)

Frontend (Upcoming)
* **Framework**: Next.js (App Router) / React with TailwindCSS

### 🏁 Getting Started
**Prerequisites**
* Node.js >= 20.x
* npm >= 10.x
* Python >= 3.11

**Installation**
1. Clone the repository:
```Bash
git clone https://github.com/your-username/audio-transcription-cleanup.git
cd audio-transcription-cleanup
```

2. Install the Edge Layer dependencies:
```Bash
npm install
```

3. Configure your environment options:
```Bash
cp .env.example .env
```
