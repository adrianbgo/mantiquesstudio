// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type FooterDocumentDataSlicesSlice =
  | LinkListSlice
  | NewsletterSignUpSlice
  | AddressBlockSlice;

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Slice Zone field in *Footer*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<FooterDocumentDataSlicesSlice>;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<FooterDocumentData>, "footer", Lang>;

type HomeDocumentDataSlicesSlice = HeroSlice | AboutSectionSlice;

/**
 * Content for home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Title field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

type LandingPageDocumentDataSlicesSlice =
  | FeaturedProductsSlice
  | NewsletterSignUpSlice
  | AddressBlockSlice
  | ButtonsSlice
  | AboutSectionSlice
  | LinkListSlice
  | HeroSlice;

/**
 * Content for Landing Page documents
 */
interface LandingPageDocumentData {
  /**
   * About Section field in *Landing Page*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.about_section
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  about_section: prismic.ContentRelationshipField<"about_section">;

  /**
   * Footer field in *Landing Page*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.footer
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  footer: prismic.ContentRelationshipField<"footer">;

  /**
   * Slice Zone field in *Landing Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<LandingPageDocumentDataSlicesSlice> /**
   * Meta Title field in *Landing Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: landing_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Landing Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: landing_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Landing Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Landing Page document from Prismic
 *
 * - **API ID**: `landing_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LandingPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<LandingPageDocumentData>,
    "landing_page",
    Lang
  >;

type NavigationDocumentDataSlicesSlice = NavigationItemSlice;

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Name field in *Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Slice Zone field in *Navigation*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<NavigationDocumentDataSlicesSlice>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | FeaturedProductsSlice
  | HeroSlice
  | NewsletterSignUpSlice
  | LinkListSlice
  | FooterSlice
  | NavigationItemSlice
  | ButtonsSlice
  | AddressBlockSlice
  | AboutSectionSlice
  | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Featured Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.featured_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  featured_image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes =
  | FooterDocument
  | HomeDocument
  | LandingPageDocument
  | NavigationDocument
  | PageDocument;

/**
 * Primary content in *AboutSection → Default → Primary*
 */
export interface AboutSectionSliceDefaultPrimary {
  /**
   * Title field in *AboutSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_section.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Body field in *AboutSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_section.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  body: prismic.KeyTextField;

  /**
   * About Page field in *AboutSection → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: about_section.default.primary.about_page
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  about_page: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;
}

/**
 * Default variation for AboutSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AboutSection*
 */
type AboutSectionSliceVariation = AboutSectionSliceDefault;

/**
 * AboutSection Shared Slice
 *
 * - **API ID**: `about_section`
 * - **Description**: AboutSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSectionSlice = prismic.SharedSlice<
  "about_section",
  AboutSectionSliceVariation
>;

/**
 * Primary content in *AddressBlock → Default → Primary*
 */
export interface AddressBlockSliceDefaultPrimary {
  /**
   * Address Line 1 field in *AddressBlock → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: address_block.default.primary.address_line_1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  address_line_1: prismic.KeyTextField;

  /**
   * Address Line 2 field in *AddressBlock → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: address_block.default.primary.address_line_2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  address_line_2: prismic.KeyTextField;

  /**
   * City field in *AddressBlock → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: address_block.default.primary.city
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  city: prismic.KeyTextField;

  /**
   * State field in *AddressBlock → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: address_block.default.primary.state
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  state: prismic.KeyTextField;

  /**
   * Country field in *AddressBlock → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: address_block.default.primary.country
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  country: prismic.KeyTextField;

  /**
   * Zip Code field in *AddressBlock → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: address_block.default.primary.zip_code
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  zip_code: prismic.KeyTextField;

  /**
   * Phone Number field in *AddressBlock → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: address_block.default.primary.phone_number
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone_number: prismic.KeyTextField;
}

/**
 * Default variation for AddressBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AddressBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AddressBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AddressBlock*
 */
type AddressBlockSliceVariation = AddressBlockSliceDefault;

/**
 * AddressBlock Shared Slice
 *
 * - **API ID**: `address_block`
 * - **Description**: AddressBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AddressBlockSlice = prismic.SharedSlice<
  "address_block",
  AddressBlockSliceVariation
>;

/**
 * Item in *Buttons → Default → Primary → Buttons*
 */
export interface ButtonsSliceDefaultPrimaryButtonsItem {
  /**
   * Text field in *Buttons → Default → Primary → Buttons*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: buttons.default.primary.buttons[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Link field in *Buttons → Default → Primary → Buttons*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: buttons.default.primary.buttons[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

  /**
   * Width field in *Buttons → Default → Primary → Buttons*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Auto
   * - **API ID Path**: buttons.default.primary.buttons[].width
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  width: prismic.SelectField<"Auto" | "25%" | "50%" | "75%" | "100%", "filled">;

  /**
   * Style field in *Buttons → Default → Primary → Buttons*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Fill
   * - **API ID Path**: buttons.default.primary.buttons[].style
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  style: prismic.SelectField<"Fill" | "Outline", "filled">;
}

/**
 * Primary content in *Buttons → Default → Primary*
 */
export interface ButtonsSliceDefaultPrimary {
  /**
   * Buttons field in *Buttons → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: buttons.default.primary.buttons[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  buttons: prismic.GroupField<Simplify<ButtonsSliceDefaultPrimaryButtonsItem>>;
}

/**
 * Default variation for Buttons Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ButtonsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ButtonsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Buttons*
 */
type ButtonsSliceVariation = ButtonsSliceDefault;

/**
 * Buttons Shared Slice
 *
 * - **API ID**: `buttons`
 * - **Description**: Buttons
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ButtonsSlice = prismic.SharedSlice<
  "buttons",
  ButtonsSliceVariation
>;

/**
 * Primary content in *FeaturedProducts → Default → Primary*
 */
export interface FeaturedProductsSliceDefaultPrimary {
  /**
   * Title field in *FeaturedProducts → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_products.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Default variation for FeaturedProducts Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedProductsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeaturedProductsSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *FeaturedProducts → Centered → Primary*
 */
export interface FeaturedProductsSliceCenteredPrimary {
  /**
   * Title field in *FeaturedProducts → Centered → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_products.centered.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Centered variation for FeaturedProducts Slice
 *
 * - **API ID**: `centered`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedProductsSliceCentered = prismic.SharedSliceVariation<
  "centered",
  Simplify<FeaturedProductsSliceCenteredPrimary>,
  never
>;

/**
 * Slice variation for *FeaturedProducts*
 */
type FeaturedProductsSliceVariation =
  | FeaturedProductsSliceDefault
  | FeaturedProductsSliceCentered;

/**
 * FeaturedProducts Shared Slice
 *
 * - **API ID**: `featured_products`
 * - **Description**: FeaturedProducts
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedProductsSlice = prismic.SharedSlice<
  "featured_products",
  FeaturedProductsSliceVariation
>;

/**
 * Default variation for Footer Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *Footer*
 */
type FooterSliceVariation = FooterSliceDefault;

/**
 * Footer Shared Slice
 *
 * - **API ID**: `footer`
 * - **Description**: Footer
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSlice = prismic.SharedSlice<"footer", FooterSliceVariation>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Title field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Body field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  body: prismic.KeyTextField;

  /**
   * Link field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

  /**
   * Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *LinkList → Default → Primary*
 */
export interface LinkListSliceDefaultPrimary {
  /**
   * Facebook field in *LinkList → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: link_list.default.primary.facebook
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  facebook: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * Twitter field in *LinkList → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: link_list.default.primary.twitter
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  twitter: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * Instagram field in *LinkList → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: link_list.default.primary.instagram
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  instagram: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * Pinterest field in *LinkList → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: link_list.default.primary.pinterest
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  pinterest: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;
}

/**
 * Default variation for LinkList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LinkListSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LinkListSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *LinkList*
 */
type LinkListSliceVariation = LinkListSliceDefault;

/**
 * LinkList Shared Slice
 *
 * - **API ID**: `link_list`
 * - **Description**: LinkList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LinkListSlice = prismic.SharedSlice<
  "link_list",
  LinkListSliceVariation
>;

/**
 * Primary content in *NavigationItem → Default → Primary*
 */
export interface NavigationItemSliceDefaultPrimary {
  /**
   * Link field in *NavigationItem → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.default.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Default variation for NavigationItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavigationItemSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *NavigationItem*
 */
type NavigationItemSliceVariation = NavigationItemSliceDefault;

/**
 * NavigationItem Shared Slice
 *
 * - **API ID**: `navigation_item`
 * - **Description**: NavigationItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationItemSlice = prismic.SharedSlice<
  "navigation_item",
  NavigationItemSliceVariation
>;

/**
 * Primary content in *NewsletterSignUp → Default → Primary*
 */
export interface NewsletterSignUpSliceDefaultPrimary {
  /**
   * Title field in *NewsletterSignUp → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: newsletter_sign_up.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Email Address field in *NewsletterSignUp → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: newsletter_sign_up.default.primary.email_address
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email_address: prismic.KeyTextField;
}

/**
 * Default variation for NewsletterSignUp Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsletterSignUpSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NewsletterSignUpSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *NewsletterSignUp*
 */
type NewsletterSignUpSliceVariation = NewsletterSignUpSliceDefault;

/**
 * NewsletterSignUp Shared Slice
 *
 * - **API ID**: `newsletter_sign_up`
 * - **Description**: NewsletterSignUp
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsletterSignUpSlice = prismic.SharedSlice<
  "newsletter_sign_up",
  NewsletterSignUpSliceVariation
>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataSlicesSlice,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      LandingPageDocument,
      LandingPageDocumentData,
      LandingPageDocumentDataSlicesSlice,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      AboutSectionSlice,
      AboutSectionSliceDefaultPrimary,
      AboutSectionSliceVariation,
      AboutSectionSliceDefault,
      AddressBlockSlice,
      AddressBlockSliceDefaultPrimary,
      AddressBlockSliceVariation,
      AddressBlockSliceDefault,
      ButtonsSlice,
      ButtonsSliceDefaultPrimaryButtonsItem,
      ButtonsSliceDefaultPrimary,
      ButtonsSliceVariation,
      ButtonsSliceDefault,
      FeaturedProductsSlice,
      FeaturedProductsSliceDefaultPrimary,
      FeaturedProductsSliceCenteredPrimary,
      FeaturedProductsSliceVariation,
      FeaturedProductsSliceDefault,
      FeaturedProductsSliceCentered,
      FooterSlice,
      FooterSliceVariation,
      FooterSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      LinkListSlice,
      LinkListSliceDefaultPrimary,
      LinkListSliceVariation,
      LinkListSliceDefault,
      NavigationItemSlice,
      NavigationItemSliceDefaultPrimary,
      NavigationItemSliceVariation,
      NavigationItemSliceDefault,
      NewsletterSignUpSlice,
      NewsletterSignUpSliceDefaultPrimary,
      NewsletterSignUpSliceVariation,
      NewsletterSignUpSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
    };
  }
}
