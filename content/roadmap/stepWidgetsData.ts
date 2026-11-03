import {
  MathTopicDiagnostic,
  SystemsCodeTab,
  SystemsBenchmarkMetric,
  DegreeRouteComparison,
  GpuQuantPreset,
  LiteratureMatrixDomain
} from "./types";

// ============================================================
// STEP 0.1: MATHEMATICAL RIGOR & DIAGNOSTIC BENCHMARKS DATA
// ============================================================

export const mathDiagnosticMeta = {
  stepBadge: "Step 0.1 Interactive Math Console",
  title: "The 4 Theoretical Mathematical Pillars",
  headerBadge: "Admissions Diagnostic Benchmark",
  conceptsHeader: "Non-Negotiable Concepts To Master:",
  proofChallengeHeader: "Sample Whiteboard Defense Challenge:",
  realityHeader: "Admissions Committee Reality: "
};

export const mathTopicsData: MathTopicDiagnostic[] = [
  {
    id: "linear-algebra",
    name: "Linear Algebra & Matrix Decompositions",
    icon: "Sigma",
    badge: "Core Theoretical Foundation",
    concepts: [
      "Spectral Decomposition & Eigenvalues of Symmetric Matrices",
      "Singular Value Decomposition (SVD): Low-rank matrix approximations",
      "Positive Semi-Definite (PSD) Matrices & Kernel Methods",
      "Matrix Norms: Frobenius norm ||A||_F and Spectral norm ||A||_2"
    ],
    admissionsExpectation: "Faculty expect you to prove why eigenvalues of symmetric real matrices are real and how SVD relates to PCA and Attention rank.",
    sampleProof: "Derive the best rank-k approximation of a matrix A under Frobenius norm using SVD (Eckart–Young–Mirsky theorem)."
  },
  {
    id: "calculus",
    name: "Multivariable Calculus & Vector Gradients",
    icon: "BrainCircuit",
    badge: "Computational Graph Architecture",
    concepts: [
      "Jacobian Matrices: Mapping multivariate vector-valued functions",
      "Hessian Matrices & Second-Order Curvature in Loss Surfaces",
      "Matrix Differentials: Tr(A^T dB) and vector backpropagation",
      "Automatic Differentiation: Reverse-mode graph execution by hand"
    ],
    admissionsExpectation: "You must be capable of deriving backpropagation for multi-head self-attention and LayerNorm on a whiteboard without consulting notes.",
    sampleProof: "Derive the gradient of the softmax cross-entropy loss function L with respect to logit vector z by hand: dL/dz = softmax(z) - y."
  },
  {
    id: "probability",
    name: "Probability & Mathematical Statistics",
    icon: "Sparkles",
    badge: "Generative & Bayesian AI",
    concepts: [
      "Maximum Likelihood Estimation (MLE) vs. Maximum A Posteriori (MAP)",
      "Kullback–Leibler (KL) Divergence & Jensen-Shannon Divergence",
      "Variational Inference & Evidence Lower Bound (ELBO) Derivations",
      "Markov Chain Monte Carlo (MCMC) & Score-Based Generative Models"
    ],
    admissionsExpectation: "Diffusion models (DDPM) and VAEs are founded entirely on variational inference and stochastic differential equations. Theoretical clarity is non-negotiable.",
    sampleProof: "Derive the Evidence Lower Bound (ELBO) for Variational Autoencoders starting from log p(x) and applying Jensen's Inequality."
  },
  {
    id: "optimization",
    name: "Non-Convex Optimization Theory",
    icon: "Award",
    badge: "Training Dynamics & Stability",
    concepts: [
      "Convex Sets, Dual Problems, and Karush–Kuhn–Tucker (KKT) Conditions",
      "Lipschitz Continuity & Gradient Smoothness Constants",
      "Stochastic Gradient Descent (SGD) with Polyak & Nesterov Momentum",
      "AdamW Weight Decay Decoupling & Learning Rate Warmup Schedules"
    ],
    admissionsExpectation: "Admissions committees test why Adam with L2 regularization fails to generalize compared to decoupled weight decay (AdamW).",
    sampleProof: "Prove that under L-smoothness, gradient descent with step size eta < 2/L guarantees non-increasing loss at every iteration."
  }
];

// ============================================================
// STEP 0.2: DEEP LEARNING SYSTEMS & CODEBASE ARCHITECTURE DATA
// ============================================================

export const systemsCodeMeta = {
  stepBadge: "Step 0.2 Interactive Systems Console",
  title: "Production PyTorch Research Codebase Architecture",
  headerBadge: "Zero-Notebook Standard",
  subBadge: "PyTorch 2.x • CUDA 12",
  facultyCallout: {
    title: "Why Faculty Prioritize This: ",
    desc: "Advisors do not have time to teach incoming PhD students how to launch multi-GPU jobs or fix OOM errors. Demonstrating a modular PyTorch repository with Hydra and DDP proves you can produce research deliverables from Day 1."
  }
};

export const systemsBenchmarkMetricsData: SystemsBenchmarkMetric[] = [
  {
    id: "throughput",
    label: "Throughput",
    value: "Linear DDP Scaling",
    iconName: "Zap",
    variant: "cyan"
  },
  {
    id: "vram",
    label: "VRAM Efficiency",
    value: "-65% via bfloat16",
    iconName: "Gauge",
    variant: "emerald"
  },
  {
    id: "configs",
    label: "Configs",
    value: "Modular Hydra YAML",
    iconName: "Layers",
    variant: "purple"
  },
  {
    id: "cluster",
    label: "Cluster Ready",
    value: "Slurm / Multi-GPU",
    iconName: "Server",
    variant: "amber"
  }
];

export const systemsTabsData: SystemsCodeTab[] = [
  {
    id: "ddp",
    label: "PyTorch DDP Init",
    fileName: "distributed_trainer.py",
    language: "python",
    description: "Production Distributed Data Parallel (DDP) initialization across multi-GPU nodes with NCCL backend.",
    highlights: ["Backend NCCL", "torch.cuda.set_device", "DistributedDataParallel"],
    code: `import os
import torch
import torch.distributed as dist
from torch.nn.parallel import DistributedDataParallel as DDP

def setup_distributed():
    """Initializes the distributed process group with NCCL backend."""
    dist.init_process_group(backend="nccl")
    local_rank = int(os.environ["LOCAL_RANK"])
    torch.cuda.set_device(local_rank)
    return local_rank

def wrap_model(model: torch.nn.Module, local_rank: int) -> DDP:
    """Wraps model in DDP with gradient bucket synchronization."""
    model = model.to(local_rank)
    return DDP(
        model, 
        device_ids=[local_rank], 
        output_device=local_rank,
        find_unused_parameters=False
    )`
  },
  {
    id: "amp",
    label: "AMP & Memory Profiling",
    fileName: "engine_amp.py",
    language: "python",
    description: "Automatic Mixed Precision (bfloat16) training loop with Gradient Scaling and CUDA memory telemetry.",
    highlights: ["torch.amp.autocast", "GradScaler", "memory_allocated"],
    code: `import torch
from torch.amp import autocast, GradScaler

scaler = GradScaler("cuda")

def training_step(model, optimizer, data, targets):
    optimizer.zero_grad(set_to_none=True) # Saves VRAM bandwidth
    
    with autocast("cuda", dtype=torch.bfloat16):
        predictions = model(data)
        loss = criterion(predictions, targets)
        
    scaler.scale(loss).backward()
    scaler.unscale_(optimizer)
    torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
    scaler.step(optimizer)
    scaler.update()
    
    # Track VRAM consumption
    peak_vram_gb = torch.cuda.max_memory_allocated() / 1e9
    return loss.item(), peak_vram_gb`
  },
  {
    id: "hydra",
    label: "Hydra Config Management",
    fileName: "train_hydra.py",
    language: "python",
    description: "Hierarchical YAML configuration with Hydra to eliminate hardcoded hyperparameters in research code.",
    highlights: ["@hydra.main", "DictConfig", "Reproducible CLI"],
    code: `import hydra
from omegaconf import DictConfig, OmegaConf
import wandb

@hydra.main(version_base=None, config_path="configs", config_name="train")
def main(cfg: DictConfig) -> None:
    print(OmegaConf.to_yaml(cfg))
    
    # Initialize experiment telemetry
    wandb.init(
        project=cfg.experiment.project_name,
        name=f"{cfg.model.architecture}_{cfg.optimizer.lr}",
        config=OmegaConf.to_container(cfg, resolve=True)
    )
    
    train_model(cfg)

if __name__ == "__main__":
    main()`
  },
  {
    id: "reproducibility",
    label: "Deterministic Seed Harness",
    fileName: "seed_control.py",
    language: "python",
    description: "Deterministic seeding across Python, NumPy, PyTorch, and cuDNN to guarantee exact review reproducibility.",
    highlights: ["torch.manual_seed", "cudnn.deterministic", "Zero Flakiness"],
    code: `import os
import random
import numpy as np
import torch

def set_seed(seed: int = 42) -> None:
    """Enforces 100% deterministic execution for peer review reproduction."""
    random.seed(seed)
    os.environ["PYTHONHASHSEED"] = str(seed)
    np.random.seed(seed)
    torch.manual_seed(seed)
    torch.cuda.manual_seed_all(seed)
    
    torch.backends.cudnn.deterministic = True
    torch.backends.cudnn.benchmark = False
    print(f"Deterministic seed locked: {seed}")`
  }
];

// ============================================================
// STEP 0.3: DIRECT PHD VS. THESIS MASTER'S DECISION MATRIX DATA
// ============================================================

export const decisionMatrixMeta = {
  stepBadge: "Step 0.3 Interactive Strategic Matrix",
  title: "Direct PhD vs. Thesis Master's vs. Coursework Traps",
  headerBadge: "Admissions Economics",
  netFinancialBalanceLabel: "Estimated Net Financial Balance",
  stipendLabel: "Stipend / Income",
  tuitionLabel: "Tuition Status",
  undergradLabel: "Direct Entry from BS?",
  undergradEligibleText: "Yes, 100% Eligible",
  masterOutLabel: "Master-Out Escape Hatch?",
  masterOutAvailableText: "Yes (Funded MS Exit)",
  masterOutNotAvailableText: "Not Applicable",
  evaluationHeader: "Strategic Evaluation & Recommendation:",
  globalHubsLabel: "Top Global Hubs:",
  decisionRuleFooter: {
    rule: "Summary Decision Rule: If you have ANY prior research experience, apply directly to PhD programs.",
    badge: "Step 0.3 Locked"
  }
};

export const degreeRoutesData: DegreeRouteComparison[] = [
  {
    id: "phd",
    title: "Direct-Entry PhD (Recommended)",
    shortLabel: "Direct PhD",
    tag: "100% Fully Funded Flagship",
    badgeVariant: "emerald",
    cardTheme: "emerald",
    financialOutcome: "+$180,000 to +$250,000 Net Positive (5-Year)",
    fundingGuarantee: "Guaranteed 4–5 Years (RA/TA Contract)",
    stipendAmount: "$34,000 – $52,000 / year (Tax-advantaged)",
    tuitionStatus: "100% Waived + Health Insurance Covered",
    timeline: "4–5 Years (Direct from Bachelor's)",
    undergradDirectEntry: true,
    masterOutOption: true,
    facultyPriority: "Maximum: Faculty invest multi-year grants in doctoral candidates.",
    verdict: "Top choice for CS graduates with at least one research project or thesis experience. Zero debt, guaranteed income, and the golden master-out safety net.",
    targetRegions: ["United States (NSF/DARPA Grants)", "Canada (Direct PhD)", "Singapore (A*STAR/SINGA)"],
    callout: {
      type: "positive",
      title: "The Secret \"Master-Out\" Strategy: ",
      desc: "Many students do not realize that in top US universities, direct-entry PhD students who decide after 2 years that they prefer industry over research can legally \"master out\". They receive their Master's degree completely free, having been paid $80k+ in stipends with zero tuition debt."
    }
  },
  {
    id: "thesis-ms",
    title: "Funded Thesis Master's (MSc / MASc)",
    shortLabel: "Thesis Master's",
    tag: "Funded Research Runway",
    badgeVariant: "cyan",
    cardTheme: "cyan",
    financialOutcome: "$0 Debt / Small Positive Net ($15k–$25k/yr)",
    fundingGuarantee: "Guaranteed 2 Years with Formal Advisor",
    stipendAmount: "$20,000 – $32,000 CAD/EUR / year",
    tuitionStatus: "Fully Reimbursed or Nominal ($500–$2,000/yr)",
    timeline: "2 Years (Thesis Defense Mandatory)",
    undergradDirectEntry: true,
    masterOutOption: false,
    facultyPriority: "High: Faculty need motivated master's students for specific grant deliverables.",
    verdict: "Ideal stepping stone if your undergraduate profile lacks published preprints. Gives you 2 years of top-tier lab compute to launch into a Top 10 PhD.",
    targetRegions: ["Canada (Mila, Vector Institute, UBC, Toronto)", "Germany (TUM, MPI - Free Tuition)", "Switzerland (ETH/EPFL - Paid Assistantships)"]
  },
  {
    id: "taught-ms",
    title: "Coursework / Taught MS (Avoid for Research)",
    shortLabel: "Taught MS Trap",
    tag: "High Debt Warning ⚠️",
    badgeVariant: "rose",
    cardTheme: "rose",
    financialOutcome: "-$80,000 to -$120,000 Net Loss (Student Loans)",
    fundingGuarantee: "0% Funding (Tuition is paid entirely by student)",
    stipendAmount: "$0 (Living expenses not covered)",
    tuitionStatus: "Full Out-of-State / International Rates ($50k–$80k)",
    timeline: "1–1.5 Years (Classroom Only)",
    undergradDirectEntry: true,
    masterOutOption: false,
    facultyPriority: "Very Low: Professors rarely hire taught master's students into funded AI labs.",
    verdict: "Cash-cow program designed for university revenue. You will NOT receive lab funding, and your chances of obtaining a publication are minimal due to heavy course loads.",
    targetRegions: ["US Professional MS", "UK 1-Year Taught MSc", "Australian Coursework MS"],
    callout: {
      type: "warning",
      title: "The Rejection / Debt Danger: ",
      desc: "Over 70% of international applicants falsely believe they can \"enter an unfunded MS and find an RA position once on campus\". In reality, professors have strict grant obligations and reserve almost 100% of their RA funding for incoming doctoral students."
    }
  }
];

// ============================================================
// STEP 0.4: NICHE AI RESEARCH FORMULATION & BENCHMARK MATRIX
// ============================================================

export const literatureMatrixMeta = {
  stepBadge: "Step 0.4 Research Direction Matrix",
  title: "AI Subfield Gap Formulation & Venue Targets",
  headerBadge: "Problem Formulation",
  advisorsVerdict: "Faculty Filter Principle: ",
  advisorsQuote: "Top faculty instantly discard candidates who propose generic 'I want to work on LLMs' topics. You must pinpoint a specific algorithmic limitation, benchmark failure mode, or theoretical gap."
};

// ============================================================
// STEP 0.5: ZERO-BUDGET GPU COMPUTE & QUANTIZATION BENCHMARKS
// ============================================================

export const gpuQuantMeta = {
  stepBadge: "Step 0.5 Interactive Compute Sandbox",
  title: "Low-Resource GPU VRAM & Fine-Tuning Estimator",
  headerBadge: "Zero-Budget Architecture",
  hardwareTipTitle: "Admissions Defense Standard: ",
  hardwareTipDesc: "Showing professors that you trained a 7B or 14B parameter model on a single free T4 GPU via QLoRA 4-bit proves hardware resourcefulness and deep systems maturity."
};

export const gpuQuantPresetsData: GpuQuantPreset[] = [
  {
    id: "llama-8b",
    name: "Llama-3.1 8B Instruct",
    parameters: "8.0 Billion",
    fp16VramGB: 16.0,
    quant8bitVramGB: 9.2,
    qloraVramGB: 5.8,
    minRecommendedGpu: "Google Colab Free (T4 16GB) or RTX 3060",
    freeTierCompatible: true,
    batchSizeLimit: "Batch size 4 with Gradient Accumulation 8",
    notes: "Fits comfortably inside free 15GB T4 GPU using bitsandbytes 4-bit NormalFloat (NF4)."
  },
  {
    id: "mistral-7b",
    name: "Mistral 7B v0.3",
    parameters: "7.2 Billion",
    fp16VramGB: 14.4,
    quant8bitVramGB: 8.4,
    qloraVramGB: 5.2,
    minRecommendedGpu: "Kaggle 2x T4 (30GB total) or Lightning AI",
    freeTierCompatible: true,
    batchSizeLimit: "Batch size 8 with FlashAttention-2",
    notes: "Sliding window attention reduces KV-cache memory footprint significantly."
  },
  {
    id: "qwen-14b",
    name: "Qwen 2.5 14B Coder",
    parameters: "14.7 Billion",
    fp16VramGB: 29.4,
    quant8bitVramGB: 17.1,
    qloraVramGB: 10.4,
    minRecommendedGpu: "Kaggle Dual-T4 (2x15GB) or RunPod RTX 4090 ($0.39/hr)",
    freeTierCompatible: true,
    batchSizeLimit: "Batch size 2 with LoRA rank r=16",
    notes: "Requires QLoRA 4-bit + CPU offloading for AdamW states or Dual-GPU model parallelism."
  },
  {
    id: "deepseek-coder-6.7b",
    name: "DeepSeek Coder 6.7B",
    parameters: "6.7 Billion",
    fp16VramGB: 13.5,
    quant8bitVramGB: 7.9,
    qloraVramGB: 4.8,
    minRecommendedGpu: "Colab Free T4 (15GB)",
    freeTierCompatible: true,
    batchSizeLimit: "Batch size 8 with 4k context window",
    notes: "Outstanding coding benchmark results achievable with 100% free cloud compute."
  }
];

export const literatureMatrixData: LiteratureMatrixDomain[] = [
  {
    id: "efficient-llm",
    domain: "Efficient LLM Reasoning & Speculative Decoding",
    hotProblems: [
      "Draft model latency vs. acceptance rate trade-off in Speculative Decoding",
      "KV-cache compression via attention sink eviction without accuracy degradation",
      "Sub-quadratic state-space architectures (Mamba-2) vs. Transformer hybrids"
    ],
    recommendedVenues: ["ICML", "NeurIPS", "EMNLP", "COLING"],
    foundationalPapers: [
      {
        title: "Fast Inference from Transformers via Speculative Decoding",
        authorsYear: "Leviathan et al., ICML 2023",
        coreTakeaway: "Parallel draft generation with target verification speeds up inference by 2x–3x lossless."
      },
      {
        title: "Transformers are RNNs: Fast Autoregressive Transformers with Linear Attention",
        authorsYear: "Katharopoulos et al., ICML 2020",
        coreTakeaway: "Kernel trick formulations reducing O(N^2) complexity to O(N)."
      }
    ],
    whiteboardAttackAngle: "Propose an adaptive draft length heuristic conditioned on per-token entropy to minimize target verifier stalls."
  },
  {
    id: "multimodal-world-models",
    domain: "Multimodal Representation & Embodied World Models",
    hotProblems: [
      "Physical commonsense hallucination in visual autoregressive models",
      "Discrete visual tokenization vs. continuous latent diffusion for action planning",
      "Sample efficiency in offline reinforcement learning from video demonstrations"
    ],
    recommendedVenues: ["CVPR", "ICLR", "CoRL", "RSS"],
    foundationalPapers: [
      {
        title: "Mastering Diverse Domains through World Models (DreamerV3)",
        authorsYear: "Hafner et al., Nature / ICLR 2023",
        coreTakeaway: "World models learn physics dynamics in latent space with fixed hyperparameter across domains."
      },
      {
        title: "Visual Instruction Tuning (LLaVA)",
        authorsYear: "Liu et al., NeurIPS 2023",
        coreTakeaway: "Linear projection between frozen vision encoder (CLIP) and language backbone (Vicuna)."
      }
    ],
    whiteboardAttackAngle: "Formulate a predictive latent loss enforcing temporal consistency and energy conservation in video world models."
  },
  {
    id: "ai-science-biology",
    domain: "Geometric Deep Learning for Molecular & Protein Design",
    hotProblems: [
      "SE(3)-equivariant graph neural networks for ligand-receptor binding affinity",
      "Equivariant diffusion models for de novo backbone and sidechain generation",
      "Out-of-distribution generalization across uncharacterized protein families"
    ],
    recommendedVenues: ["NeurIPS AI for Science", "ICLR", "Nature Methods", "Bioinformatics"],
    foundationalPapers: [
      {
        title: "Geometric Vector Perceptrons for Structure-Based Protein Modeling",
        authorsYear: "Jing et al., ICLR 2021",
        coreTakeaway: "Rotational and translational invariance on 3D Euclidean coordinates."
      },
      {
        title: "Chroma: A Generative Model for Protein Structures",
        authorsYear: "Ingraham et al., Nature 2023",
        coreTakeaway: "Equivariant diffusion process sampling functional protein backbones conditioned on symmetry."
      }
    ],
    whiteboardAttackAngle: "Incorporate physical contact constraints as Lagrangian multipliers into equivariant message passing layers."
  }
];
