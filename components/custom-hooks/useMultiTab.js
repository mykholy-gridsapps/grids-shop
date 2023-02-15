import { useState } from "react"

export default function useMultiTab(tabs) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return {
    currentTabIndex,
    setCurrentTabIndex,
    currentTab: tabs[currentTabIndex]
  };
}