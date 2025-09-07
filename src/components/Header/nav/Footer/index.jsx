import Link from 'next/link';

export default function index() {
  return (
    <div className={` flex justify-around font-normal text-[14px] w-full text-brand-text `}>
        <Link href={"/"}>Awwwards</Link>
        <Link href={"/"}>Instagram</Link>
        <Link href={"/"}>Dribble</Link>
        <Link href={"/"}>LinkedIn</Link>
    </div>
  )
}
