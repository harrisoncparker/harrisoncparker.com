import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-chivo-mono)]">
    
      <div>
        <h1 className="text-2xl md:text-6xl">Harrison C Parker</h1>

        <h2 className="mt-2 text-lg md:text-3xl md:mt-8">Full-Stack Engineer</h2>

        <ul className="flex gap-8 mt-2 md:mt-8 text-[#dc5502] italic md:text-md">
          <li>
            <a href="https://www.linkedin.com/in/harrisoncparker/">🔗 linkedin</a>
          </li>
          <li>
            <a href="https://github.com/harrisoncparker">🔗 github</a>
          </li>
        </ul>
      </div>
    
    </div>
  );
}
