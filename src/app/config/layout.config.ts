import { LayoutConfig } from '@spartacus/storefront';

export const prfLayoutConfig: LayoutConfig = {
  // deferredLoading: {
  //   strategy: DeferLoadingStrategy.DEFER,
  //   intersectionMargin: '50px',
  // },
  layoutSlots: {
    header: {
      lg: {
        slots: [
          'PreHeader',
          'SiteContext',
          'SiteLinks',
          'SiteLogo',
          'SearchBox',
          'SiteLogin',
          'MiniCart',
          'NavigationBar',
        ],
      },
      slots: ['PreHeader', 'SiteLogo', 'SearchBox', 'MiniCart'],
    },
    navigation: {
      lg: { slots: [] },
      slots: ['SiteLogin', 'NavigationBar', 'SiteContext', 'SiteLinks'],
    },
    footer: {
      slots: ['Footer'],
    },
    LandingPage2Template: {
      pageFold: 'Section2B',
      slots: ['Section1', 'Section2A', 'Section2B', 'Section2C', 'Section3', 'Section4', 'Section5'],
    },
    ContentPage1Template: {
      slots: ['Section2A', 'Section2B'],
    },
    CategoryPageTemplate: {
      pageFold: 'Section2',
      slots: ['Section1', 'Section2', 'Section3'],
    },
    ProductListPageTemplate: {
      slots: ['ProductLeftRefinements', 'ProductListSlot'],
    },
    ProductGridPageTemplate: {
      slots: ['ProductLeftRefinements', 'ProductGridSlot'],
    },
    SearchResultsListPageTemplate: {
      slots: ['Section2', 'ProductLeftRefinements', 'SearchResultsListSlot', 'Section4'],
    },
    SearchResultsGridPageTemplate: {
      slots: ['Section2', 'ProductLeftRefinements', 'SearchResultsGridSlot', 'Section4'],
    },
    ProductDetailsPageTemplate: {
      lg: {
        pageFold: 'UpSelling',
      },
      pageFold: 'Summary',
      slots: ['Summary', 'UpSelling', 'CrossSelling', 'Tabs', 'PlaceholderContentSlot'],
    },
    CartPageTemplate: {
      slots: ['TopContent', 'CenterRightContentSlot', 'EmptyCartMiddleContent'],
    },
    AccountPageTemplate: {
      slots: ['BodyContent', 'SideContent'],
    },
    LoginPageTemplate: {
      slots: ['LeftContentSlot', 'RightContentSlot'],
    },
    ErrorPageTemplate: {
      slots: ['TopContent', 'MiddleContent', 'BottomContent'],
    },
    OrderConfirmationPageTemplate: {
      slots: ['BodyContent', 'SideContent'],
    },
    MultiStepCheckoutSummaryPageTemplate: {
      slots: ['TopContent', 'BodyContent', 'SideContent', 'BottomContent'],
    },
    CheckoutLoginPageTemplate: {
      slots: ['RightContentSlot'],
    },
  },
  breakpoints: {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: {
      min: 1200,
    },
  },
};
