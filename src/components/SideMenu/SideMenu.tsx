import Image from "next/image";
import Link from "next/link";

export default function SideMenu() {
  return <header id="header" className="header d-flex flex-column">
    <i className="header-toggle d-xl-none bi bi-list"></i>

    <div className="profile-img">
      <Image src="/img/my-profile-img.jpg" alt="" className="img-fluid rounded-circle" width={150} height={150} />
    </div>
    <Link className="logo d-flex align-items-center justify-content-center" href={"/"} style={{ textDecoration: 'none' }}>
      <h1>Milton Palmeira</h1>
    </Link>

    <div className="social-links text-center">
      <Link className="linkedin" href={"https://www.linkedin.com/in/milton-palmeira-santana"} target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></Link>
      <Link className="github" href={"https://github.com/miltonpalmeira"} target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></Link>
    </div>

    <nav id="navmenu" className="navmenu">
      <ul>
        <li><Link style={{ textDecoration: 'none' }} href="/" className="active"><i className="bi bi-house navicon"></i>Home</Link></li>
        <li><Link style={{ textDecoration: 'none' }} href="/about"><i className="bi bi-person navicon"></i> About</Link></li>
        <li><Link style={{ textDecoration: 'none' }} href="/resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</Link></li>
        <li><Link style={{ textDecoration: 'none' }} href="/portfolio"><i className="bi bi-images navicon"></i> Portfolio</Link></li>
        <li><Link style={{ textDecoration: 'none' }} href="/contact"><i className="bi bi-envelope navicon"></i> Contact</Link></li>
      </ul>
    </nav>

  </header>;
}
