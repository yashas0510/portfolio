import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Github, Linkedin, Phone, ExternalLink, MapPin } from "lucide-react"

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16 py-12 font-sans">

      {/* Header */}
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold tracking-tight text-white uppercase">
          Yashas Bansode
        </h1>

        <p className="mt-2 text-blue-400 font-medium">
          Cybersecurity Enthusiast , TryHackMe Top 6%
        </p>

        <p className="mt-4 max-w-2xl text-gray-400 leading-relaxed">
          Motivated cybersecurity enthusiast with experience in digital forensics,
          OSINT tools, web development, network security, and ethical hacking.
          Proficient in Burp Suite, Shodan, Kali Linux, and modern web technologies.
        </p>
      </section>

      <Separator className="my-12 max-w-4xl mx-auto bg-blue-900" />

      {/* Projects */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 uppercase tracking-wider text-blue-300">
          Projects
        </h2>

        <div className="grid gap-8">
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
            title="Beginner CTF"
            link="https://github.com/yashas0510/CTF1"
            description="Beginner level ctf for students to get an idea of what ctf is."
            tags={["React", "TypeScript"]}
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

      <Separator className="my-12 max-w-4xl mx-auto bg-blue-900" />

      {/* Experience */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 uppercase tracking-wider text-blue-300">
          Experience
        </h2>

        <div className="space-y-8">
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

      <Separator className="my-12 max-w-4xl mx-auto bg-blue-900" />

      {/* Skills */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 uppercase tracking-wider text-blue-300">
          Technical Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Python","Flask","HTML5","CSS3","JavaScript","PHP","SQL",
            "Kali Linux","Burp Suite","Metasploit","Nmap","Wireshark",
            "Hashcat","Hydra","Autopsy","FTK Imager","Shodan"
          ].map(skill => (
            <Badge
              key={skill}
              className="border-2 border-[#4a6fb3] text-white bg-transparent"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <Separator className="my-12 max-w-4xl mx-auto bg-blue-900" />

      {/* Contact */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 uppercase tracking-wider text-blue-300">
          Contact
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <ContactItem icon={<Mail />} href="mailto:yashas.bansode2003@gmail.com" text="yashas.bansode2003@gmail.com" />
          <ContactItem icon={<Phone />} href="tel:+917506644771" text="+91 7506644771" />
          <ContactItem icon={<Github />} href="https://github.com/yashas0510" text="github.com/yashas0510" />
          <ContactItem icon={<Linkedin />} href="https://www.linkedin.com/in/yashas-bansode-70400826b/" text="linkedin.com/in/yashas-bansode" />
        </div>
      </section>

      <Separator className="my-12 max-w-4xl mx-auto bg-blue-900" />

      <footer className="max-w-4xl mx-auto text-sm text-gray-500 flex items-center gap-2">
        <MapPin className="w-4 h-4" />
        Mumbai, India · English, German, Marathi, Hindi
      </footer>
    </main>
  )
}

/* ---------- Components ---------- */

function Project({ title, link, description, tags }: any) {
  return (
    <Card
      className="
        bg-[#3e4651]
        border-4 border-[#4a6fb3]
        shadow-[8px_8px_0px_#000]
        hover:-translate-y-1
        hover:border-[#5d87d6]
        transition-all
      "
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex gap-1"
          >
            {title}
            <ExternalLink className="w-4 h-4 text-blue-400" />
          </a>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((t: string) => (
            <Badge
              key={t}
              className="border-2 border-[#4a6fb3] text-white bg-transparent"
            >
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
    <Card
      className="
        bg-[#3e4651]
        border-4 border-[#4a6fb3]
        shadow-[8px_8px_0px_#000]
      "
    >
      <CardHeader>
        <CardTitle>{role}</CardTitle>
        <p className="text-sm text-gray-400">{org} · {period}</p>
      </CardHeader>

      <CardContent>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
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
      rel="noopener noreferrer"
      className="
        flex items-center gap-3
        border-4 border-[#4a6fb3]
        bg-[#3e4651]
        px-4 py-3
        shadow-[6px_6px_0px_#000]
        hover:-translate-y-1
        transition-all
      "
    >
      {icon}
      <span>{text}</span>
    </a>
  )
}