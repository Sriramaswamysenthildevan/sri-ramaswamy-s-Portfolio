"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { siteConfig, socialLinks } from "@/data/siteData";

// ─── Types ───────────────────────────────────────────────────
interface TerminalLine {
  type: "command" | "output" | "error" | "success" | "info";
  content: string;
}

// ─── Constants ───────────────────────────────────────────────
const PROMPT = "visitor@sriramaswamy:~$ ";

const KNOWN_COMMANDS = [
  "help", "whoami", "about", "skills", "projects", "contact",
  "resume", "github", "linkedin", "tech", "mission", "status",
  "neofetch", "clear", "hire", "coffee", "fortune", "date",
  "time", "pwd", "ls", "sudo",
];

const FORTUNE_QUOTES = [
  '"Automation is good, so long as you know exactly where to put the machine." — Eliyahu Goldratt',
  '"The best way to predict the future is to implement it." — David Heinemeier Hansson',
  '"Infrastructure as code is not just about automation, it\'s about collaboration." — Kief Morris',
  '"Move fast and break things. Unless you\'re deploying to production on a Friday." — DevOps Wisdom',
  '"There is no cloud, it\'s just someone else\'s computer." — Chris Watterston',
  '"DevOps is not a goal, but a never-ending process of continual improvement." — Jez Humble',
  '"Containers don\'t contain. They isolate and standardize." — Docker Community',
  '"The only way to go fast is to go well." — Robert C. Martin',
];

// ─── Component ───────────────────────────────────────────────
export default function Journey() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [typingText, setTypingText] = useState("");
  const [isBooting, setIsBooting] = useState(false);
  const [hasBooted, setHasBooted] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [cursorVisible, setCursorVisible] = useState(true);

  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);
  const mountedRef = useRef(true);
  const bootStartedRef = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  // ─── Lifecycle ─────────────────────────────────────────
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      bootStartedRef.current = false;
      setLines([]);
      setTypingText("");
      setIsBooting(false);
      setHasBooted(false);
      setIsInteractive(false);
    };
  }, []);

  // ─── Auto-scroll terminal output ──────────────────────
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines, typingText]);

  // ─── Blinking cursor ─────────────────────────────────
  useEffect(() => {
    const id = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  // ─── Focus input when interactive ─────────────────────
  useEffect(() => {
    if (isInteractive) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isInteractive]);

  // ─── Helpers ──────────────────────────────────────────
  const sleep = useCallback(
    (ms: number) =>
      new Promise<void>((resolve) => {
        setTimeout(resolve, ms);
      }),
    []
  );

  const addLine = useCallback(
    (type: TerminalLine["type"], content: string) => {
      if (!mountedRef.current) return;
      setLines((prev) => [...prev, { type, content }]);
    },
    []
  );

  const addLines = useCallback(
    (newLines: TerminalLine[]) => {
      if (!mountedRef.current) return;
      setLines((prev) => [...prev, ...newLines]);
    },
    []
  );

  // ─── Typing animation for commands ────────────────────
  const typeCommand = useCallback(
    async (cmd: string) => {
      if (!mountedRef.current) return;
      setTypingText(PROMPT);
      await sleep(250);

      for (let i = 1; i <= cmd.length; i++) {
        if (!mountedRef.current) return;
        setTypingText(PROMPT + cmd.slice(0, i));
        await sleep(35 + Math.random() * 40);
      }

      await sleep(350);
      if (!mountedRef.current) return;
      addLine("command", PROMPT + cmd);
      setTypingText("");
    },
    [sleep, addLine]
  );

  // ─── Output animation (line by line) ──────────────────
  const outputAnimated = useCallback(
    async (outputs: string[], delay = 70) => {
      for (const line of outputs) {
        if (!mountedRef.current) return;
        addLine("output", line);
        await sleep(delay);
      }
      await sleep(250);
    },
    [sleep, addLine]
  );

  // ─── Boot Sequence ────────────────────────────────────
  const runBootSequence = useCallback(async () => {
    // boot
    await typeCommand("boot");
    await outputAnimated(
      [
        "Initializing Portfolio...",
        "Loading Linux Modules...",
        "Loading Docker...",
        "Loading Kubernetes...",
        "Loading AWS...",
        "Loading Developer Profile...",
        "",
        "Access Granted ✅",
      ],
      110
    );

    // whoami
    await typeCommand("whoami");
    await outputAnimated(["Sriramaswamy Senthil Devan"], 80);

    // role
    await typeCommand("role");
    await outputAnimated(
      ["DevOps Engineer", "Cloud Enthusiast", "Builder"],
      100
    );

    // tech
    await typeCommand("tech");
    await outputAnimated(
      [
        "Linux",
        "Docker",
        "Kubernetes",
        "AWS",
        "Terraform",
        "Git",
        "GitHub Actions",
        "Python",
      ],
      65
    );

    // mission
    await typeCommand("mission");
    await outputAnimated(
      [
        "Build scalable systems.",
        "Automate everything.",
        "Learn continuously.",
        "Share knowledge.",
      ],
      110
    );

    // status
    await typeCommand("status");
    await outputAnimated(
      [
        "Currently Building",
        "",
        "✔ Personal Portfolio",
        "✔ Docker Projects",
        "✔ Kubernetes Labs",
        "✔ AWS Projects",
      ],
      90
    );

    // neofetch
    await typeCommand("neofetch");
    await outputAnimated(
      [
        "  .--.       visitor@sriramaswamy",
        " |o_o |      ─────────────────────",
        " |:_/ |      OS: Ubuntu 24.04",
        "//   \\ \\     Shell: Bash",
        "(|     | )    Editor: VS Code",
        "/'\\_   _/`\\   Cloud: AWS",
        "\\___)=(___/   Containers: Docker",
        "              Orchestration: Kubernetes",
        "              Language: Python",
        "              Location: India",
      ],
      70
    );

    if (!mountedRef.current) return;
    setHasBooted(true);
    setIsBooting(false);
    setIsInteractive(true);
  }, [typeCommand, outputAnimated]);

  // ─── Start boot when section scrolls into view ────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !bootStartedRef.current) {
          bootStartedRef.current = true;
          setIsBooting(true);
          runBootSequence();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [runBootSequence]);

  // ─── Execute interactive command ──────────────────────
  const executeCommand = useCallback(
    (cmd: string) => {
      const raw = cmd.trim();
      const trimmed = raw.toLowerCase();

      if (!trimmed) return;

      setCommandHistory((prev) => [...prev, raw]);
      setHistoryIndex(-1);
      addLine("command", PROMPT + raw);

      // clear is special
      if (trimmed === "clear") {
        setLines([]);
        return;
      }

      let output: string[] = [];

      switch (trimmed) {
        case "help":
          output = [
            "",
            "  Available Commands",
            "  ─────────────────",
            "",
            "  whoami       Who am I?",
            "  about        Navigate to About",
            "  skills       Navigate to Skills",
            "  projects     Navigate to Projects",
            "  contact      Navigate to Contact",
            "  resume       Download resume",
            "  github       Open GitHub",
            "  linkedin     Open LinkedIn",
            "  tech         My tech stack",
            "  mission      My mission",
            "  status       Current status",
            "  neofetch     System info",
            "  hire         Hire me!",
            "  clear        Clear terminal",
            "",
          ];
          break;

        case "whoami":
          output = [
            "Sriramaswamy Senthil Devan",
            "Final Year Computer Science Student",
            "DevOps & Cloud Enthusiast",
          ];
          break;

        case "about":
          output = ["Navigating to About..."];
          setTimeout(() => {
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" });
          }, 500);
          break;

        case "skills":
          output = ["Navigating to Skills..."];
          setTimeout(() => {
            document
              .querySelector("#skills")
              ?.scrollIntoView({ behavior: "smooth" });
          }, 500);
          break;

        case "projects":
          output = ["Navigating to Projects..."];
          setTimeout(() => {
            document
              .querySelector("#projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }, 500);
          break;

        case "contact":
          output = ["Navigating to Contact..."];
          setTimeout(() => {
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }, 500);
          break;

        case "resume":
          output = ["Downloading resume..."];
          setTimeout(() => {
            window.open(siteConfig.resumeUrl, "_blank");
          }, 500);
          break;

        case "github":
          output = ["Opening GitHub..."];
          setTimeout(() => {
            window.open(socialLinks.github, "_blank");
          }, 500);
          break;

        case "linkedin":
          output = ["Opening LinkedIn..."];
          setTimeout(() => {
            window.open(socialLinks.linkedin, "_blank");
          }, 500);
          break;

        case "tech":
          output = [
            "Linux",
            "Docker",
            "Kubernetes",
            "AWS",
            "Terraform",
            "Git",
            "GitHub Actions",
            "Python",
            "React",
            "Next.js",
          ];
          break;

        case "mission":
          output = [
            "Build.",
            "Automate.",
            "Scale.",
            "",
            "Always keep learning.",
          ];
          break;

        case "status":
          output = [
            "Currently Working On",
            "",
            "✔ Portfolio v2",
            "✔ Docker Labs",
            "✔ Kubernetes",
            "✔ AWS Projects",
            "✔ Learning DevOps Daily",
          ];
          break;

        case "neofetch":
          output = [
            "  .--.       visitor@sriramaswamy",
            " |o_o |      ─────────────────────",
            " |:_/ |      OS: Ubuntu 24.04",
            "//   \\ \\     Shell: Bash",
            "(|     | )    Editor: VS Code",
            "/'\\_   _/`\\   Cloud: AWS",
            "\\___)=(___/   Containers: Docker",
            "              Orchestration: Kubernetes",
            "              Language: Python",
            "              Location: India",
          ];
          break;

        case "hire":
          output = [
            "",
            "  ✅ Candidate Summary",
            "  ─────────────────────",
            "",
            "  Name:",
            "    Sriramaswamy Senthil Devan",
            "",
            "  Role:",
            "    DevOps Engineer",
            "",
            "  Strengths:",
            "    • Linux",
            "    • Docker",
            "    • Kubernetes",
            "    • AWS",
            "    • Fast Learner",
            "    • Team Player",
            "    • Builder",
            "",
            "  Status:",
            "    Available for Internship & Full-Time Opportunities",
            "",
            "  Downloading Resume...",
            "",
          ];
          setTimeout(() => {
            window.open(siteConfig.resumeUrl, "_blank");
          }, 2000);
          break;

        // ─── Easter eggs ─────────────────────────────────
        case "coffee":
          output = ["", "☕ Coffee Loaded", "", "Energy +100", ""];
          break;

        case "sudo rm -rf /":
          output = ["", "Permission Denied 😄", "", "Nice try.", ""];
          break;

        case "fortune":
          output = [
            "",
            FORTUNE_QUOTES[
              Math.floor(Math.random() * FORTUNE_QUOTES.length)
            ],
            "",
          ];
          break;

        case "date":
          output = [
            new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
          ];
          break;

        case "time":
          output = [
            new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
          ];
          break;

        case "pwd":
          output = ["/home/sriramaswamy"];
          break;

        case "ls":
          output = [
            "about/  projects/  skills/  resume.pdf  contact/",
          ];
          break;

        case "role":
          output = ["DevOps Engineer", "Cloud Enthusiast", "Builder"];
          break;

        case "boot":
          output = [
            "System already running.",
            'Type "help" for available commands.',
          ];
          break;

        default:
          output = [
            `Command not found: ${raw}`,
            'Type "help" for available commands.',
          ];
          break;
      }

      addLines(
        output.map((content) => ({
          type: "output" as const,
          content,
        }))
      );
    },
    [addLine, addLines]
  );

  // ─── Keyboard handlers ────────────────────────────────
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        executeCommand(input);
        setInput("");
      } else if (e.key === "Tab") {
        e.preventDefault();
        if (!input) return;
        const matches = KNOWN_COMMANDS.filter((c) =>
          c.startsWith(input.toLowerCase())
        );
        if (matches.length === 1) {
          setInput(matches[0]);
        } else if (matches.length > 1) {
          addLine("command", PROMPT + input);
          addLines(
            matches.map((m) => ({
              type: "output" as const,
              content: `  ${m}`,
            }))
          );
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (commandHistory.length > 0) {
          const newIdx =
            historyIndex === -1
              ? commandHistory.length - 1
              : Math.max(0, historyIndex - 1);
          setHistoryIndex(newIdx);
          setInput(commandHistory[newIdx]);
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIndex >= 0) {
          const newIdx = historyIndex + 1;
          if (newIdx >= commandHistory.length) {
            setHistoryIndex(-1);
            setInput("");
          } else {
            setHistoryIndex(newIdx);
            setInput(commandHistory[newIdx]);
          }
        }
      } else if (e.key === "l" && e.ctrlKey) {
        e.preventDefault();
        setLines([]);
      }
    },
    [
      input,
      commandHistory,
      historyIndex,
      executeCommand,
      addLine,
      addLines,
    ]
  );

  const focusInput = useCallback(() => {
    if (isInteractive) {
      inputRef.current?.focus();
    }
  }, [isInteractive]);

  // ─── Render ───────────────────────────────────────────
  return (
    <section
      id="terminal"
      ref={sectionRef}
      className="relative py-24 sm:py-32"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Terminal
            </span>
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto">
            An interactive terminal — type commands to explore my portfolio
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Terminal Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          onClick={focusInput}
          className="relative group cursor-text"
        >
          {/* Outer glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-violet-500/10 to-purple-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

          {/* Terminal window */}
          <div className="relative rounded-3xl border border-purple-500/20 bg-[#0c0c10]/95 backdrop-blur-xl shadow-2xl shadow-purple-900/10 overflow-hidden">
            {/* ── Header (traffic lights + title) ────── */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02] select-none">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-125 transition" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e] hover:brightness-125 transition" />
                <div className="w-3 h-3 rounded-full bg-[#28c840] hover:brightness-125 transition" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-zinc-500 font-mono tracking-wide">
                  visitor@sriramaswamy: ~
                </span>
              </div>
              <div className="w-[52px]" /> {/* spacer to center title */}
            </div>

            {/* ── Terminal body ───────────────────────── */}
            <div
              ref={outputRef}
              className="p-5 sm:p-6 h-[420px] sm:h-[500px] overflow-y-auto"
              style={{
                fontFamily:
                  "var(--font-jetbrains-mono), 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
              }}
            >
              {/* Rendered lines */}
              {lines.map((line, i) => (
                <div
                  key={i}
                  className={`text-[13px] sm:text-sm leading-[1.7] whitespace-pre-wrap break-words ${
                    line.type === "command"
                      ? "text-green-400"
                      : line.type === "error"
                      ? "text-red-400"
                      : line.type === "success"
                      ? "text-emerald-400"
                      : line.type === "info"
                      ? "text-purple-400"
                      : "text-zinc-300"
                  } ${line.content === "" ? "h-3" : ""}`}
                >
                  {line.content}
                </div>
              ))}

              {/* Currently typing line (boot animation) */}
              {typingText && (
                <div className="text-[13px] sm:text-sm leading-[1.7] text-green-400 whitespace-pre-wrap">
                  {typingText}
                  <span
                    className={`text-purple-400 transition-opacity duration-100 ${
                      cursorVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    ▌
                  </span>
                </div>
              )}

              {/* Interactive input line */}
              {isInteractive && !typingText && (
                <div className="text-[13px] sm:text-sm leading-[1.7] flex items-center">
                  <span className="text-green-400 whitespace-pre">
                    {PROMPT}
                  </span>
                  <span className="text-zinc-100">{input}</span>
                  <span
                    className={`text-purple-400 transition-opacity duration-100 ${
                      cursorVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    ▌
                  </span>
                  {/* Hidden input for keyboard capture (desktop) */}
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => {
                      setInput(e.target.value);
                      setHistoryIndex(-1);
                    }}
                    onKeyDown={handleKeyDown}
                    className="absolute opacity-0 pointer-events-none -z-10 w-[1px] h-[1px]"
                    aria-label="Terminal command input"
                    autoComplete="off"
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck={false}
                  />
                </div>
              )}

              {/* Pre-boot state */}
              {!isBooting && !hasBooted && !typingText && (
                <div className="text-zinc-600 text-[13px] sm:text-sm animate-pulse">
                  Waiting to initialize...
                </div>
              )}
            </div>

            {/* ── Mobile input bar ────────────────────── */}
            {isInteractive && (
              <div className="flex items-center gap-2 px-4 py-3 border-t border-white/[0.06] bg-white/[0.02] sm:hidden">
                <span className="text-green-400 text-xs font-mono shrink-0">
                  $
                </span>
                <input
                  ref={mobileInputRef}
                  type="text"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    setHistoryIndex(-1);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command..."
                  className="flex-1 bg-transparent text-white text-sm outline-none placeholder-zinc-600"
                  style={{
                    fontFamily:
                      "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
                  }}
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck={false}
                />
              </div>
            )}
          </div>
        </motion.div>

        {/* Help hint */}
        {isInteractive && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center text-zinc-600 text-xs mt-5"
            style={{
              fontFamily:
                "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
            }}
          >
            Type{" "}
            <span className="text-purple-400 font-medium">help</span>{" "}
            for available commands &nbsp;•&nbsp; ↑↓ history
            &nbsp;•&nbsp; Tab autocomplete
          </motion.p>
        )}
      </div>
    </section>
  );
}
