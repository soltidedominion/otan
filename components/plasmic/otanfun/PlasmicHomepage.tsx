// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rDy6Bf3bBGkjq3csNVFqdD
// Component: oG-9p2rwqY7J

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { NavigationBar } from "@plasmicpkgs/plasmic-nav";
import { PlasmicHead } from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariantsgFuorIF4Hd6 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: GFuor_iF4Hd6/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: rDy6Bf3bBGkjq3csNVFqdD/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: oG-9p2rwqY7J/css

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  navigationBar?: Flex__<typeof NavigationBar>;
  pageMetadataOverride?: Flex__<typeof PlasmicHead>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsgFuorIF4Hd6()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <NavigationBar
            data-plasmic-name={"navigationBar"}
            data-plasmic-override={overrides.navigationBar}
            brand={
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__btvzs
                )}
                component={Link}
                href={"#"}
                platform={"nextjs"}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img___20PRr)}
                  displayHeight={"40px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  src={{
                    src: "/plasmic/otanfun/images/otanfaceLogoPng.png",
                    fullWidth: 403,
                    fullHeight: 409,
                    aspectRatio: undefined
                  }}
                />
              </PlasmicLink__>
            }
            className={classNames("__wab_instance", sty.navigationBar)}
            closeButton={
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__wxqPe)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={"https://static1.plasmic.app/close.svg"}
              />
            }
            itemsGap={24}
            menuItems={
              <React.Fragment>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__wTf2B
                  )}
                  component={Link}
                  href={"/"}
                  platform={"nextjs"}
                >
                  {"Pump.fun"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__utYvA
                  )}
                  component={Link}
                  href={"https://t.me/otanonsol"}
                  platform={"nextjs"}
                >
                  {"Telegram"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__ychRy
                  )}
                  component={Link}
                  href={"https://www.tiktok.com/@otanonsol"}
                  platform={"nextjs"}
                >
                  {"Tiktok"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__pcBbm
                  )}
                  component={Link}
                  href={"https://x.com/otanonsol"}
                  platform={"nextjs"}
                >
                  {"Twitter"}
                </PlasmicLink__>
              </React.Fragment>
            }
            openButton={
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__uYgw3)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={"https://static1.plasmic.app/menu.svg"}
              />
            }
            responsiveBreakpoint={768}
          />

          <div className={classNames(projectcss.all, sty.freeBox__xpo9A)}>
            <div className={classNames(projectcss.all, sty.freeBox___7RWp4)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__j4Fi
                )}
              >
                {"Otan"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___63Xkz
                )}
              >
                {
                  "From the jungle to the city, now we living in style. Crypto changed the game, got us stacking that pile\nSport. cars, bright lights, we shining so high.\nEven Otan\u2019s rocking diamonds, under the sky"
                }
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__tXiAw)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__x4Zjj)}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__xcUcB)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"150px"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/otanfun/images/img1Png.png",
                    fullWidth: 864,
                    fullHeight: 864,
                    aspectRatio: undefined
                  }}
                />

                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__i9Hvf)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"150px"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/otanfun/images/img2Png.png",
                    fullWidth: 864,
                    fullHeight: 864,
                    aspectRatio: undefined
                  }}
                />

                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__hwPpz)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"150px"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/otanfun/images/img3Png.png",
                    fullWidth: 864,
                    fullHeight: 864,
                    aspectRatio: undefined
                  }}
                />

                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__gKZo)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"150px"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/otanfun/images/img4Png.png",
                    fullWidth: 864,
                    fullHeight: 864,
                    aspectRatio: undefined
                  }}
                />
              </Stack__>
            </div>
          </div>
          <PlasmicHead
            data-plasmic-name={"pageMetadataOverride"}
            data-plasmic-override={overrides.pageMetadataOverride}
            className={classNames("__wab_instance", sty.pageMetadataOverride)}
            description={"Swung from the jungle, now we run the game!"}
            image={"/plasmic/otanfun/images/img4Png.png"}
            title={"Otan Fun on Solana"}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navigationBar", "pageMetadataOverride"],
  navigationBar: ["navigationBar"],
  pageMetadataOverride: ["pageMetadataOverride"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navigationBar: typeof NavigationBar;
  pageMetadataOverride: typeof PlasmicHead;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    pageMetadataOverride: makeNodeComponent("pageMetadataOverride"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
