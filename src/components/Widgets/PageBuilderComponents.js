import { defineAsyncComponent } from 'vue'

export default {
  ActionButton: defineAsyncComponent(() => import('src/components/Widgets/ActionButton/ActionButton.vue')),
  Block: defineAsyncComponent(() => import('src/components/Widgets/Block/Block.vue')),
  BottomNavigation: defineAsyncComponent(() => import('src/components/Widgets/BottomNavigation/BottomNavigation.vue')),
  Cart: defineAsyncComponent(() => import('src/components/Widgets/Cart/Cart.vue')),
  ComparisonTable: defineAsyncComponent(() => import('src/components/Widgets/ComparisonTable/ComparisonTable.vue')),
  ContentItem: defineAsyncComponent(() => import('src/components/Widgets/ContentItem/ContentItem.vue')),
  Dashboard: defineAsyncComponent(() => import('src/components/Widgets/Dashboard/Dashboard.vue')),
  DownloadSoalaaExam: defineAsyncComponent(() => import('src/components/Widgets/DownloadSoalaaExam/DownloadSoalaaExam.vue')),
  ExpansionPanel: defineAsyncComponent(() => import('src/components/Widgets/ExpansionPanel/ExpansionPanel.vue')),
  FeatureBox: defineAsyncComponent(() => import('src/components/Widgets/FeatureBox/FeatureBox.vue')),
  Footer: defineAsyncComponent(() => import('src/components/Widgets/Footer/Footer.vue')),
  GoLogin: defineAsyncComponent(() => import('src/components/Widgets/GoLogin/GoLogin.vue')),
  HeaderMenu: defineAsyncComponent(() => import('src/components/Widgets/HeaderMenu/HeaderMenu.vue')),
  HomePage: defineAsyncComponent(() => import('src/components/Widgets/HomePage/HomePage.vue')),
  ImageWidget: defineAsyncComponent(() => import('src/components/Widgets/ImageWidget/ImageWidget.vue')),
  Newsletter: defineAsyncComponent(() => import('src/components/Widgets/Newsletter/Newsletter.vue')),
  PersonSlider: defineAsyncComponent(() => import('src/components/Widgets/PersonSlider/PersonSlider.vue')),
  ProductContents: defineAsyncComponent(() => import('src/components/Widgets/Product/ProductContents/ProductContents.vue')),
  ProductDemos: defineAsyncComponent(() => import('src/components/Widgets/Product/ProductDemos/ProductDemos.vue')),
  ProductGifts: defineAsyncComponent(() => import('src/components/Widgets/Product/ProductGifts/ProductGifts.vue')),
  ProductInfoShow: defineAsyncComponent(() => import('src/components/Widgets/Product/ProductInfoShow/ProductInfoShow.vue')),
  ProductIntroduction: defineAsyncComponent(() => import('src/components/Widgets/Product/ProductIntroduction/ProductIntroduction.vue')),
  ProductItem: defineAsyncComponent(() => import('src/components/Widgets/Product/ProductItem/ProductItem.vue')),
  ProductPrice: defineAsyncComponent(() => import('src/components/Widgets/Product/ProductPrice/ProductPrice.vue')),
  ProductReview: defineAsyncComponent(() => import('src/components/Widgets/Product/ProductReview/ProductReview.vue')),
  ProductsTabPanel: defineAsyncComponent(() => import('src/components/Widgets/Product/ProductsTabPanel/ProductsTabPanel.vue')),
  Profile: defineAsyncComponent(() => import('src/components/Widgets/Profile/Profile.vue')),
  Quiz: defineAsyncComponent(() => import('src/components/Widgets/Quiz/Quiz.vue')),
  SetItem: defineAsyncComponent(() => import('src/components/Widgets/SetItem/SetItem.vue')),
  Slider: defineAsyncComponent(() => import('src/components/Widgets/Slider/Slider.vue')),
  StickyMenu: defineAsyncComponent(() => import('src/components/Widgets/StickyMenu/StickyMenu.vue')),
  FAQ: defineAsyncComponent(() => import('src/components/Widgets/Subscription/FAQ/FAQ.vue')),
  SubscriptionBanner: defineAsyncComponent(() => import('src/components/Widgets/Subscription/SubscriptionBanner/SubscriptionBanner.vue')),
  SubscriptionPackagesSection: defineAsyncComponent(() => import('src/components/Widgets/Subscription/SubscriptionPackagesSection/SubscriptionPackagesSection.vue')),
  TabPanel: defineAsyncComponent(() => import('src/components/Widgets/TabPanel/TabPanel.vue')),
  TestComponent1Widget: defineAsyncComponent(() => import('src/components/Widgets/TestComponent1Widget/TestComponent1Widget.vue')),
  TestComponent2Widget: defineAsyncComponent(() => import('src/components/Widgets/TestComponent2Widget/TestComponent2Widget.vue')),
  TextWidget: defineAsyncComponent(() => import('src/components/Widgets/TextWidget/TextWidget.vue')),
  VideoPlayerWidget: defineAsyncComponent(() => import('src/components/Widgets/VideoPlayerWidget/VideoPlayerWidget.vue'))
}
