import { RoadmapStep } from "../types";

export const phase0Steps: RoadmapStep[] = [
  {
    id: "step-0-1",
    phaseId: "phase-0",
    stepNumber: "0.1",
    title: "Mathematical Foundations & Theoretical Diagnostic",
    shortTitle: "Math Foundations",
    subtitle: "Audit your core linear algebra, multivariable calculus, probability, and optimization skills",
    duration: "6–8 Weeks",
    priority: "Crucial",
    keyObjective: "Attain the theoretical depth needed to formulate custom loss functions, derive gradients, and understand convergence proofs in AI literature.",
    description: "Top AI/ML research groups will not accept candidates who treat deep learning as an empirical black box. You must demonstrate mathematical intuition in matrix factorization, vector calculus, Bayesian probability, and non-convex gradient descent dynamics.",
    checklist: [
      {
        id: "c-0-1-1",
        task: "Linear Algebra Mastery",
        detail: "Understand Spectral Decomposition, Singular Value Decomposition (SVD), Positive Semi-Definite (PSD) matrices, and matrix norms (Frobenius, Spectral)."
      },
      {
        id: "c-0-1-2",
        task: "Multivariate Calculus & Vector Derivatives",
        detail: "Derive Jacobians, Hessians, matrix differentials, and understand computational graph backpropagation by hand."
      },
      {
        id: "c-0-1-3",
        task: "Probability & Mathematical Statistics",
        detail: "Master Maximum Likelihood Estimation (MLE), Maximum A Posteriori (MAP), KL-Divergence, Jensen-Shannon Divergence, and Markov Chain Monte Carlo (MCMC)."
      },
      {
        id: "c-0-1-4",
        task: "Optimization Theory",
        detail: "Study Convex optimization, Karush-Kuhn-Tucker (KKT) conditions, Stochastic Gradient Descent (SGD) with momentum, and AdamW convergence dynamics."
      }
    ],
    proTips: [
      "Review Gilbert Strang's 'Linear Algebra and Learning from Data' and Boyd & Vandenberghe's 'Convex Optimization'.",
      "When writing papers or your Statement of Purpose, use standard mathematical notation (boldface vectors, calligraphic sets) rather than code variable names."
    ],
    commonPitfalls: [
      "Relying solely on high-level Python libraries without understanding the analytical derivations behind loss surfaces.",
      "Assuming a high GPA in generic engineering math compensates for an absence of advanced proof-based analysis or probability coursework."
    ],
    deliverable: "Completed self-audit solving 20 complex proof-based problems in matrix calculus, KL divergence minimization, and gradient derivations.",
    resources: [
      {
        title: "Mathematics for Machine Learning (Deisenroth et al.)",
        url: "https://mml-book.github.io/",
        type: "paper",
        description: "Free digital book covering the core linear algebra and calculus necessary for modern ML."
      },
      {
        title: "Matrix Calculus for Deep Learning (Parr & Howard)",
        url: "https://explained.ai/matrix-calculus/",
        type: "guide",
        description: "Comprehensive step-by-step tutorial on computing vector/matrix derivatives."
      }
    ]
  },
  {
    id: "step-0-2",
    phaseId: "phase-0",
    stepNumber: "0.2",
    title: "Deep Learning Systems & Production-Grade Engineering",
    shortTitle: "Systems & PyTorch Code",
    subtitle: "Transition from basic script-writing to scalable, modular, distributed PyTorch and JAX codebases",
    duration: "8 Weeks",
    priority: "Crucial",
    keyObjective: "Build the ability to implement seminal models from scratch, configure multi-GPU distributed training, and write clean, reproducible code that professors can immediately integrate into their labs.",
    description: "Professors do not want students who need hand-holding to set up training runs. You must write modular object-oriented PyTorch or JAX code, manage experiment tracking (WandB), build modular configs (Hydra), and understand CUDA memory management.",
    checklist: [
      {
        id: "c-0-2-1",
        task: "Idiomatic PyTorch & Custom Autograd",
        detail: "Write custom torch.autograd.Function classes with explicit forward and backward passes."
      },
      {
        id: "c-0-2-2",
        task: "GPU Memory Management & Efficiency",
        detail: "Master mixed-precision training (torch.cuda.amp / bfloat16), gradient checkpointing, and memory profiling via torch.cuda.memory_allocated()."
      },
      {
        id: "c-0-2-3",
        task: "Distributed Multi-GPU Training",
        detail: "Implement DistributedDataParallel (DDP), Fully Sharded Data Parallel (FSDP), and understand DeepSpeed ZeRO stages 1-3."
      },
      {
        id: "c-0-2-4",
        task: "Clean Project Configuration & Logging",
        detail: "Standardize codebases using Hydra for hierarchical YAML configs and Weights & Biases (WandB) for artifact and metric tracking."
      }
    ],
    proTips: [
      "Re-implement a fundamental paper from scratch (e.g., 'Attention Is All You Need' or 'DDPM: Denoising Diffusion Probabilistic Models') in pure PyTorch without relying on high-level wrapper libraries.",
      "Profile your CUDA kernels or PyTorch code using PyTorch Profiler or NVIDIA Nsight Systems to show faculty you care about throughput."
    ],
    commonPitfalls: [
      "Using messy single-file Jupyter notebooks for research projects instead of modular, CLI-driven repositories.",
      "Ignoring deterministic seeding (`torch.manual_seed`), making it impossible for reviewers or faculty to reproduce your baseline tables."
    ],
    deliverable: "A public, modular PyTorch repository implementing a modern vision or language architecture with DDP, mixed precision, and Hydra config management.",
    codeSnippet: {
      language: "python",
      caption: "Clean Distributed PyTorch DDP Initialization",
      code: `import os
import torch
import torch.distributed as dist
from torch.nn.parallel import DistributedDataParallel as DDP

def setup_distributed():
    dist.init_process_group(backend="nccl")
    local_rank = int(os.environ["LOCAL_RANK"])
    torch.cuda.set_device(local_rank)
    return local_rank

def wrap_model(model, local_rank):
    model = model.to(local_rank)
    return DDP(model, device_ids=[local_rank], output_device=local_rank)`
    },
    resources: [
      {
        title: "The Annotated Transformer (Harvard NLP)",
        url: "https://nlp.seas.harvard.edu/annotated-transformer/",
        type: "guide",
        description: "Line-by-line PyTorch implementation of the original Transformer architecture."
      },
      {
        title: "PyTorch Distributed Training Tutorials",
        url: "https://pytorch.org/tutorials/intermediate/ddp_tutorial.html",
        type: "official",
        description: "Official guide to scaling PyTorch models across multiple GPUs and nodes."
      }
    ]
  },
  {
    id: "step-0-3",
    phaseId: "phase-0",
    stepNumber: "0.3",
    title: "Direct PhD vs. Thesis Master's Decision Matrix",
    shortTitle: "Degree Route Selection",
    subtitle: "Choose between applying directly for a doctoral degree or pursuing a research Master's based on funding realities",
    duration: "2 Weeks",
    priority: "Crucial",
    keyObjective: "Avoid the expensive trap of unfunded taught Master's degrees by aligning your profile with the proper 100% funded research trajectory.",
    description: "In Computer Science, North American universities award the vast majority of their funding (tuition waivers and $30k–$50k stipends) to PhD students. Students graduating from a 4-year undergraduate degree can enter a PhD directly without needing a prior Master's degree.",
    checklist: [
      {
        id: "c-0-3-1",
        task: "Evaluate Direct-Entry PhD Viability",
        detail: "If your goal is cutting-edge AI research and you have prior thesis experience or preprints, apply directly to US/Canadian PhD programs to secure guaranteed 5-year funding."
      },
      {
        id: "c-0-3-2",
        task: "Filter for Thesis Master's Only",
        detail: "If you need more research runway before a PhD, apply exclusively to thesis-based MS programs in Canada (Mila, UofT, UBC, Alberta), Germany, or Switzerland where research assistantships exist."
      },
      {
        id: "c-0-3-3",
        task: "Eliminate Taught / Professional MS Traps",
        detail: "Strike out MEng, Professional MS, or Coursework MS programs unless backed by external flagships (e.g., Fulbright or DAAD), as they rarely provide tuition waivers or RA stipends."
      }
    ],
    proTips: [
      "In the US, direct-entry PhD students who decide they do not want to continue into academia after 2 years can typically 'master out', receiving a fully funded MS degree with zero student debt.",
      "In Europe (ELLIS, Max Planck, ETH Zurich), a completed Master's degree is legally mandatory before beginning a formal PhD."
    ],
    commonPitfalls: [
      "Spending $80,000+ of family savings on an unfunded coursework MS in the hope that you can 'find an RA position after arriving'—top labs usually reserve RA positions for admitted PhDs.",
      "Assuming a PhD binds you to academia forever; 80%+ of top AI PhD graduates transition directly to lucrative industry research roles (Google DeepMind, Meta FAIR, Anthropic)."
    ],
    deliverable: "Clear strategic decision document locking in either 'Direct PhD' (US/Canada focus) or 'Funded Thesis MS' (Canada/Europe focus).",
    resources: [
      {
        title: "A Field Guide to the Machine Learning PhD (Tim Dettmers)",
        url: "https://timdettmers.com",
        type: "guide",
        description: "Essential roadmap on applying to AI PhD programs, direct entry, and advisor selection."
      }
    ]
  },
  {
    id: "step-0-4",
    phaseId: "phase-0",
    stepNumber: "0.4",
    title: "Defining Your AI/ML Research Problem & Technical Niche",
    shortTitle: "Research Problem Niche",
    subtitle: "Differentiate yourself from thousands of generic applicants by defining a concrete, unsolved technical bottleneck",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Formulate a sharp research vision that allows admissions committees to match you immediately with prospective grant-funded faculty.",
    description: "Generic statements like 'I love Artificial Intelligence' lead to immediate rejection. Faculty look for applicants who can pinpoint real theoretical or empirical bottlenecks in active research subfields.",
    checklist: [
      {
        id: "c-0-4-1",
        task: "Survey Top 2024–2026 Proceedings",
        detail: "Read the Oral and Spotlight papers from recent NeurIPS, ICML, ICLR, and CVPR proceedings in your subfield."
      },
      {
        id: "c-0-4-2",
        task: "Identify Open Gaps & Trade-Offs",
        detail: "Focus on unresolved trade-offs: inference-time efficiency, sample complexity, out-of-distribution robustness, context-length scaling, or sim-to-real transfer."
      },
      {
        id: "c-0-4-3",
        task: "Synthesize a 1-Sentence Problem Formulation",
        detail: "Draft your research hypothesis: Subfield + Target Architecture + Specific Bottleneck + Proposed Methodological Angle."
      }
    ],
    proTips: [
      "Look at the 'Limitations' and 'Future Work' sections of spotlight papers from last year's ICLR/NeurIPS—they explicitly outline open problems that top PIs are currently writing grant proposals for.",
      "Focus on intersections: e.g., Combining Mechanistic Interpretability with RLHF, or 3D Gaussian Splatting with Physics-Informed Neural Networks."
    ],
    commonPitfalls: [
      "Choosing a problem that requires 10,000 H100 GPUs (like pre-training a 70B parameter frontier model from scratch) if you have limited compute. Focus on algorithmic efficiency, reasoning, or novel architectures.",
      "Claiming you are equally passionate about 6 unrelated subfields (e.g., NLP, Computer Vision, Medical Imaging, Robotics, and Quantum ML)—admissions committees view this as a lack of focus."
    ],
    deliverable: "A 1-page written Research Problem Statement specifying the hypothesis, prior limitations, proposed technique, and evaluation benchmark.",
    resources: [
      {
        title: "Papers with Code - SOTA Benchmarks",
        url: "https://paperswithcode.com/",
        type: "database",
        description: "Track state-of-the-art benchmarks and open challenges across every machine learning subfield."
      }
    ]
  },
  {
    id: "step-0-5",
    phaseId: "phase-0",
    stepNumber: "0.5",
    title: "Compute & Hardware Strategy for Low-Resource Researchers",
    shortTitle: "Compute & Hardware Strategy",
    subtitle: "Overcome GPU access limitations and build a reliable pipeline for running reproducible benchmarks",
    duration: "2 Weeks",
    priority: "Recommended",
    keyObjective: "Set up a low-cost, cloud-backed development and experimental workflow that delivers verified benchmark tables without blowing a budget.",
    description: "You do not need a personal $30,000 GPU workstation to publish competitive AI research. By leveraging free cloud tiers, student grants, and spot GPU instances, you can run rigorous experiments on a minimal budget.",
    checklist: [
      {
        id: "c-0-5-1",
        task: "Leverage Free Tier Compute",
        detail: "Maximize Kaggle Kernels (30 hours/week of free NVIDIA T4/P100 GPUs) and Google Colab free GPU instances."
      },
      {
        id: "c-0-5-2",
        task: "Set Up On-Demand Cloud Spot Instances",
        detail: "Open accounts on Lambda Labs, RunPod, or Vast.ai to rent on-demand NVIDIA A10G or A100 GPUs for final 24-to-48 hour training runs."
      },
      {
        id: "c-0-5-3",
        task: "Apply for Cloud Research Grants",
        detail: "Apply for Google Cloud Research Credits or AWS Cloud Credit for Research programs through your local university mentors."
      },
      {
        id: "c-0-5-4",
        task: "Implement Automated Spot Checkpointing",
        detail: "Write automated checkpoint saving to S3/Google Drive so pre-emptible spot instances can resume training without losing epochs."
      }
    ],
    proTips: [
      "Debug and verify your model on small synthetic datasets or single batches locally on your laptop CPU/Mac MPS before paying a cent for cloud GPUs.",
      "Small-scale models (e.g., 100M–500M parameters) evaluated rigorously over 5 distinct random seeds are vastly more respected by faculty than a single non-reproducible run of an 8B model."
    ],
    commonPitfalls: [
      "Leaving cloud GPU instances running idle overnight without setting automated shutdown scripts.",
      "Assuming that only massive compute generates acceptable research; top conferences routinely award Best Paper awards to clever theoretical or small-scale algorithmic contributions."
    ],
    deliverable: "Configured SSH keys and automated checkpointing scripts linked to a cloud GPU provider (RunPod/Lambda Labs) with active test training.",
    resources: [
      {
        title: "Google Cloud Research Credits Program",
        url: "https://cloud.google.com/edu/researchers",
        type: "official",
        description: "Apply for up to $5,000 in GCP compute credits for academic research projects."
      },
      {
        title: "RunPod GPU Cloud",
        url: "https://www.runpod.io/",
        type: "tool",
        description: "Affordable on-demand and spot NVIDIA GPU cloud rental."
      }
    ]
  }
];
