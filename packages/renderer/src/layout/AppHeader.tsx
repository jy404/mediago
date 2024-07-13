import useElectron from "@/hooks/electron";
import { selectAppStore } from "@/store";
import { cn } from "@/utils";
import {
  EyeInvisibleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

interface Props {
  className?: string;
}

export function AppHeader({ className }: Props) {
  const { openUrl } = useElectron();
  const { t } = useTranslation();
  const appStore = useSelector(selectAppStore);

  const openHelpUrl = () => {
    const url = "https://downloader.caorushizi.cn/guides.html?form=client";
    openUrl(url);
  };

  return (
    <div
      className={cn(
        "flex h-16 w-full flex-row justify-between bg-[#F9FBFC]",
        className,
      )}
    >
      <div className="h-full rounded-br-full bg-[#EBF3FB] pr-2">
        <div className="relative flex h-full min-w-[299px] flex-row items-center rounded-br-full bg-[#fff] pl-3 pr-2">
          <span className="text-lg">Media Go</span>
          <span className="ml-[30px] block text-sm text-[#666]">
            v{import.meta.env.APP_VERSION}
          </span>
          <div className="absolute bottom-0 h-[1px] w-[136px] bg-[#EFF7FF]" />
          <div className="absolute bottom-0 h-[2px] w-[45px] bg-[#127AF3]" />
        </div>
      </div>
      {/* help */}
      <div>
        <Button
          type={"link"}
          onClick={openHelpUrl}
          icon={<QuestionCircleOutlined />}
        >
          {t("help")}
        </Button>
        {appStore.privacy && (
          <>
            <EyeInvisibleOutlined /> 隐私模式
          </>
        )}
      </div>
    </div>
  );
}