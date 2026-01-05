// Minimal, modern, no-gradient portfolio using React + TypeScript + shadcn/ui
// Assumes: Vite + React + TS + Tailwind + shadcn already set up
// App.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Github, Linkedin, Phone, ExternalLink } from "lucide-react"

export default function App() {
  return (
    <main className="min-h-screen bg-black text-neutral-200 px-6 md:px-16 py-12 font-sans">
      {/* Header */}
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Yashas Bansode
        </h1>
        <p className="mt-2 text-[#FF6347] font-medium">
          Cybersecurity & Digital Forensics Enthusiast
        </p>
        <p className="mt-4 max-w-2xl text-neutral-400 leading-relaxed">
          Motivated cybersecurity enthusiast with hands-on experience in digital forensics,
          OSINT, ethical hacking, and secure software development. I enjoy building tools that
          expose real-world security risks and help people understand how systems fail — and
          how to defend them.
        </p>
      </section>

      <Separator className="my-12 max-w-4xl mx-auto bg-neutral-800" />

      {/* Projects */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-neutral-200">
          Projects
        </h2>
        <div className="grid gap-6">
          <Project
            title="Port Scanner"
            link="https://github.com/yashas0510/Port-Scanner"
            description="Python-based network scanner to identify open ports and exposed services, helping detect misconfigurations and attack surfaces."
            tags={["Python", "Networking", "Security"]}
          />
          <Project
            title="Hashed Password Cracker"
            link="https://github.com/yashas0510/Hashed-Password-Cracker"
            description="Dictionary-attack tool supporting MD5 and SHA-256 to evaluate password strength and demonstrate common cryptographic weaknesses."
            tags={["Python", "Hashing", "Offensive Security"]}
          />
          <Project
            title="Steganography Tool"
            link="https://github.com/yashas0510/Steganography-tool"
            description="Tool that hides sensitive information within images using steganographic techniques to demonstrate covert data protection."
            tags={["Python", "Steganography", "Security"]}
          />
          <Project
            title="Phishing Awareness Quiz"
            link="https://github.com/yashas0510/Phishing-Quiz"
            description="Web-based interactive quiz designed to train users to identify phishing techniques through realistic scenarios."
            tags={["Web", "Awareness", "Phishing"]}
          />
          <Project
            title="Password Strength Analyzer"
            link="https://github.com/yashas0510/Password-Strength-Analyzer-"
            description="Tool that evaluates password length, complexity, and resistance to common attacks to promote better security hygiene."
            tags={["Python", "Authentication", "Security"]}
          />
        </div>
      </section>

      <Separator className="my-12 max-w-4xl mx-auto bg-neutral-800" />

      {/* Experience */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-[#D96C9F]">
          Experience
        </h2>
        <div className="space-y-6">
          <Experience
            role="Cyber Security & Digital Forensics Intern"
            org="Cyber Secured India"
            period="Jan 2024 – Mar 2024"
            points={[
              "Performed password recovery and encryption analysis using Hashcat.",
              "Conducted vulnerability assessments using Burp Suite, Wireshark, and Kali Linux.",
              "Assisted in digital forensic investigations and incident response workflows.",
            ]}
          />
          <Experience
            role="Digital Forensics Intern"
            org="DeepCytes UK"
            period="Jun 2024 – Dec 2024"
            points={[
              "Acquired and analyzed digital evidence using FTK Imager, Recuva, and Splunk.",
              "Investigated malicious activity using network and log analysis techniques.",
              "Prepared structured forensic reports to support security investigations.",
            ]}
          />
        </div>
      </section>

      <Separator className="my-12 max-w-4xl mx-auto bg-neutral-800" />

      {/* Skills */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-neutral-200">
          Technical Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Python", "Flask", "HTML5", "CSS3", "JavaScript", "SQL",
            "Kali Linux", "Burp Suite", "Metasploit", "Nmap",
            "Wireshark", "Hashcat", "Hydra", "Autopsy", "FTK Imager",
          ].map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="rounded-md border-neutral-700 text-neutral-300"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <Separator className="my-12 max-w-4xl mx-auto bg-neutral-800" />

      {/* Contact Me */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-[#9B111E]">
          Contact Me
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <ContactItem
            icon={<Mail className="w-5 h-5 text-[#9B111E]" />}
            href="mailto:yashas.bansode2003@gmail.com"
            text="yashas.bansode2003@gmail.com"
          />
          <ContactItem
            icon={<Phone className="w-5 h-5 text-[#9B111E]" />}
            href="tel:+917506644771"
            text="+91 7506644771"
          />
          <ContactItem
            icon={<Github className="w-5 h-5 text-[#9B111E]" />}
            href="https://github.com/yashas0510"
            text="github.com/yashas0510"
          />
          <ContactItem
            icon={<Linkedin className="w-5 h-5 text-[#9B111E]" />}
            href="https://www.linkedin.com/in/yashas-bansode-70400826b/"
            text="linkedin.com/in/yashas-bansode"
          />
        </div>
      </section>

      <Separator className="my-12 max-w-4xl mx-auto bg-neutral-800" />

      {/* Footer */}
      <footer className="max-w-4xl mx-auto text-sm text-neutral-500">
        <p>Mumbai, India · English, German, Marathi, Hindi</p>
      </footer>
    </main>
  )
}

/* ---------- Components ---------- */

function Project({
  title,
  link,
  description,
  tags,
}: {
  title: string
  link: string
  description: string
  tags: string[]
}) {
  return (
    <Card className="border-neutral-800 bg-neutral-900 shadow-none">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7DD3FC] hover:underline flex items-center gap-1"
          >
            {title}
            <ExternalLink className="w-4 h-4" />
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-neutral-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-neutral-700 text-neutral-400"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function Experience({
  role,
  org,
  period,
  points,
}: {
  role: string
  org: string
  period: string
  points: string[]
}) {
  return (
    <Card className="border-neutral-800 bg-neutral-900 shadow-none">
      <CardHeader>
        <CardTitle className="text-lg text-neutral-200">{role}</CardTitle>
        <p className="text-sm text-neutral-500">
          {org} · {period}
        </p>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2 text-neutral-400">
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function ContactItem({
  icon,
  href,
  text,
}: {
  icon: React.ReactNode
  href: string
  text: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 border border-neutral-800 bg-neutral-900 rounded-lg px-4 py-3 text-neutral-300 hover:border-neutral-600 transition"
    >
      {icon}
      <span>{text}</span>
    </a>
  )
}
