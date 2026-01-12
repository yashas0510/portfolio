import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Github, Linkedin, Phone, ExternalLink, MapPin } from "lucide-react"

export default function App() {
  return (
    <main className="min-h-screen bg-black text-neutral-200 px-6 md:px-16 py-12 font-sans">
      {/* Header */}
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Yashas Bansode
        </h1>
        <p className="mt-2 text-[#FF6347] font-medium">
          Cybersecurity Enthusiast
        </p>
        <p className="mt-4 max-w-2xl text-neutral-400 leading-relaxed">
          Motivated cybersecurity enthusiast with experience in digital forensics,
          OSINT tools, web development, network security, and ethical hacking.
          Proficient in Burp Suite, Shodan, Kali Linux, and modern web technologies.
        </p>
      </section>

      <Separator className="my-12 max-w-4xl mx-auto bg-neutral-800" />

      {/* Projects */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid gap-6">
          <Project
            title="Port Scanner"
            link="https://github.com/yashas0510/Port-Scanner"
            description="Tool to scan and identify open ports on a network, helping detect exposed services and security weaknesses."
            tags={["Python", "Networking", "Security"]}
          />
          <Project
            title="Keylogger"
            link="https://github.com/yashas0510/keylogger"
            description="Python-based keylogger demonstrating security risks related to unauthorized keystroke monitoring."
            tags={["Python", "Offensive Security"]}
          />
          <Project
            title="Hashed Password Cracker"
            link="https://github.com/yashas0510/Hashed-Password-Cracker"
            description="Dictionary-attack tool supporting MD5 and SHA-256 for testing password resilience."
            tags={["Python", "Hashing"]}
          />
          <Project
            title="Price Comparison Tool"
            link="https://github.com/yashas0510/Price-Comparison-Tool"
            description="Scraper-based tool comparing prices across online stores to find best deals."
            tags={["Python", "Web Scraping"]}
          />
          <Project
            title="Phishing Quiz"
            link="https://github.com/yashas0510/Phishing-Quiz"
            description="Interactive web quiz educating users on identifying phishing techniques."
            tags={["Web", "Awareness"]}
          />
          <Project
            title="Password Strength Analyzer"
            link="https://github.com/yashas0510/Password-Strength-Analyzer-"
            description="Analyzes password strength based on length, complexity, and common attack patterns."
            tags={["Python", "Authentication"]}
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
              "Conducted security assessments using Burp Suite, Wireshark, and Kali Linux.",
              "Supported digital forensic investigations and incident response."
            ]}
          />

          <Experience
            role="Digital Forensics Intern"
            org="DeepCytes UK"
            period="Jun 2024 – Dec 2024"
            points={[
              "Performed digital evidence acquisition using FTK Imager and Recuva.",
              "Investigated malicious activity through network and log analysis.",
              "Prepared structured forensic investigation reports."
            ]}
          />
        </div>
      </section>

      <Separator className="my-12 max-w-4xl mx-auto bg-neutral-800" />

      {/* Skills */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Python", "Flask", "HTML5", "CSS3", "JavaScript", "PHP", "SQL",
            "Kali Linux", "Burp Suite", "Metasploit", "Nmap", "Wireshark",
            "Hashcat", "Hydra", "Autopsy", "FTK Imager", "Shodan"
          ].map(skill => (
            <Badge key={skill} variant="outline" className="border-neutral-700 text-neutral-300">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <Separator className="my-12 max-w-4xl mx-auto bg-neutral-800" />

      {/* Contact */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-[#9B111E]">
          Contact
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <ContactItem icon={<Mail />} href="mailto:yashas.bansode2003@gmail.com" text="yashas.bansode2003@gmail.com" />
          <ContactItem icon={<Phone />} href="tel:+917506644771" text="+91 7506644771" />
          <ContactItem icon={<Github />} href="https://github.com/yashas0510" text="github.com/yashas0510" />
          <ContactItem icon={<Linkedin />} href="https://www.linkedin.com/in/yashas-bansode-70400826b/" text="linkedin.com/in/yashas-bansode" />
        </div>
      </section>

      <Separator className="my-12 max-w-4xl mx-auto bg-neutral-800" />

      <footer className="max-w-4xl mx-auto text-sm text-neutral-500 flex items-center gap-2">
        <MapPin className="w-4 h-4" />
        Mumbai, India · English, German, Marathi, Hindi
      </footer>
    </main>
  )
}

/* ---------- Components ---------- */

function Project({ title, link, description, tags }: any) {
  return (
    <Card className="border-neutral-800 bg-neutral-900">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <a href={link} target="_blank" className="text-sky-400 hover:underline flex gap-1">
            {title}
            <ExternalLink className="w-4 h-4" />
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-neutral-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((t: string) => (
            <Badge key={t} variant="outline" className="border-neutral-700 text-neutral-400">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function Experience({ role, org, period, points }: any) {
  return (
    <Card className="border-neutral-800 bg-neutral-900">
      <CardHeader>
        <CardTitle>{role}</CardTitle>
        <p className="text-sm text-neutral-500">{org} · {period}</p>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2 text-neutral-400">
          {points.map((p: string) => <li key={p}>{p}</li>)}
        </ul>
      </CardContent>
    </Card>
  )
}

function ContactItem({ icon, href, text }: any) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-3 border border-neutral-800 bg-neutral-900 rounded-lg px-4 py-3 hover:border-neutral-600 transition"
    >
      {icon}
      <span>{text}</span>
    </a>
  )
}
