import Link from 'next/link'

const Nav = () =>
{
    return (
        <nav className="nav p-3 border-bottom bg-blue-300">
            <Link href="/" passHref>
                <h2 className=" text-xl">goodTechContent</h2>
            </Link>
            <Link href="/to-publish" passHref>
                <p className="ms-5 lead my-auto">Publish your work</p>
            </Link>
        </nav>
    )
}

export default Nav
