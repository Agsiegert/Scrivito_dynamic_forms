import DashboardUser from "./DashboardUser";

class PageView {
  static trackCurrentPage() {
    isTrackedVisitor() && window.analytics.page && window.analytics.page();
  }

  static trackEvent(...args) {
    window.analytics &&
      window.analytics.track &&
      window.analytics.track(...args);
  }

  static trackPlayVideo() {
    isTrackedVisitor() &&
      window.analytics.track &&
      window.analytics.track("Started", { category: "Video" });
  }
}

function isTrackedVisitor() {
  return window.analytics && !DashboardUser.current().isStaff;
}

export default PageView;
