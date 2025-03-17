import Image from 'next/image';

export default function Header() {
  return (
    <header className="p-4 flex items-center justify-between border-2 rounded-xl">
      <h1 className="text-3xl font-semibold italic">Logo</h1>

      <div className="flex justify-center items-center gap-4">
        <Image
          src="https://www.pngmart.com/files/21/Account-User-PNG-HD.png"
          width={0}
          height={0}
          className="w-16 h-16 rounded-full border-2 border-black"
          alt="Account image"
        />
        <div>
          <h2 className="text-xl font-semibold">Abdulloh</h2>
          <span>123456</span>
        </div>
      </div>
    </header>
  );
}
