"use client";

import React from "react";
import { useRouter } from "next/navigation";

const MainComponent = () => {
  const router = useRouter();
  let heading = "";

  switch (router.pathname) {
    case "/dashboard":
      heading = "Dashboard";
      break;
    case "/users":
      heading = "Users";
      break;
    case "/transcation":
      heading = "Transcation";
      break;
    case "/subscription":
      heading = "Subscription";
      break;
    case "/coinStore":
      heading = "Coin Store";
      break;
    case "/support":
      heading = "Support";
      break;
    case "/withdrawal":
      heading = "Withdrawal";
      break;
    case "/games":
      heading = "Games";
      break;
    case "/appOffers":
      heading = "App Offers";
      break;
    case "/dailyOffers":
      heading = "Daily Offers";
      break;
    case "/webArticles":
      heading = "Web Articles";
      break;
    case "/promotionApproval":
      heading = "Promotion Approval";
      break;
    case "/offerWall":
      heading = "Offer Wall";
      break;
    case "/videoZone":
      heading = "Video Zone";
      break;
    case "/contest":
      heading = "Contest";
      break;
    case "/promotionBanner":
      heading = "Promotion Banner";
      break;
    case "/settings":
      heading = "Settings";
      break;
    case "/appSetting":
      heading = "App Setting";
      break;
    case "/notification":
      heading = "Notification";
      break;
    case "/ads":
      heading = "Ads";
      break;
    case "/manageAdmin":
      heading = "Manage Admin";
      break;
    case "/adminSettings":
      heading = "Admin Settings";
      break;

    default:
      heading = "Dashboard";
  }

  return (
    <main>
    {router.pathname === "/" && <p>Default Content</p>}
    {router.pathname === "/dashboard" && <Dashboard />}
    {router.pathname === "/users" && <Users />}
    {router.pathname === "/transaction" && <Transaction />}
    {router.pathname === "/subscription" && <Subscription />}
    {router.pathname === "/coinStore" && <CoinStore />}
    {router.pathname === "/support" && <Support />}
    {router.pathname === "/withdrawal" && <Withdrawal />}
    {router.pathname === "/games" && <Games />}
    {router.pathname === "/appOffers" && <AppOffers />}
    {router.pathname === "/dailyOffers" && <DailyOffers />}
    {router.pathname === "/webArticles" && <WebArticles />}
    {router.pathname === "/promotionApproval" && <PromotionApproval />}
    {router.pathname === "/offerWall" && <OfferWall />}
    {router.pathname === "/videoZone" && <VideoZone />}
    {router.pathname === "/contest" && <Contest />}
    {router.pathname === "/promotionBanner" && <PromotionBanner />}
    {router.pathname === "/settings" && <Settings />}
    {router.pathname === "/appSetting" && <AppSetting />}
    {router.pathname === "/notification" && <Notification />}
    {router.pathname === "/ads" && <Ads />}
    {router.pathname === "/manageAdmin" && <ManageAdmin />}
    {router.pathname === "/adminSettings" && <AdminSettings />}
  </main>
  );
};

export default MainComponent;
