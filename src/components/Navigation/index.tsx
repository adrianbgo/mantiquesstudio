import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next";
import styles from './index.module.css'
import Link from "next/link";
import { asText } from "@prismicio/client";

const Navigation = async () => {
    const client = createClient();
    const navigation = await client.getByUID("navigation","nav-menu");
    const navLinks = await client.getAllByType("page");
    const homePage = await client.getSingle("landing_page");
    return (
        <nav className={styles.navigation}>
            <PrismicNextLink href={"/"} className={styles.navLink}><h1 className={styles.title}>{navigation.data.name}</h1></PrismicNextLink>
            <ul className={styles.navLinkContainer}>
                {
                    navLinks.map(link => (
                        <li key={link.uid}>
                            <PrismicNextLink href={link.uid} className={styles.navLink}>{asText(link.data.title)}</PrismicNextLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navigation;