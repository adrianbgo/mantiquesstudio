import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next";
import styles from './index.module.css'

const Navigation = async () => {
    const client = createClient();
    const navigation = await client.getByUID("navigation","nav-menu");

    return (
        <nav className={styles.navigation}>
            <h1 className={styles.title}>{navigation.data.name}</h1>
            <ul className={styles.navLinkContainer}>
                {/* Renders the top-level links */}
                {navigation.data.slices.map((slice) => (
                    <li key={slice.id} className={styles.navLink}>
                        <PrismicNextLink field={slice.primary.link} />
                        {/* Renders child links */}
                        {slice.primary.child_links.length > 0 && (
                            <ul>
                                {slice.primary.child_links.map(l => (
                                    <li key={JSON.stringify(l)}>
                                        <PrismicNextLink field={l} />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;