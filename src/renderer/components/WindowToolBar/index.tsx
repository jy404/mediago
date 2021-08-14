import React, { Component, ReactNode } from "react";
import "./index.scss";
import { CloseOutlined, MinusOutlined } from "@ant-design/icons";

interface Props {
  color?: string;
  onClose: () => void;
}

class WindowToolBar extends Component<Props, Record<string, never>> {
  // 最小化窗口
  minimizeWindow = (): void => {
    // TODO: 最小化窗口
    // remote.getCurrentWindow().minimize();
  };

  render(): ReactNode {
    const { children, onClose, color = "#fff" } = this.props;
    return (
      <div className="window-tool-bar" style={{ background: color }}>
        <div className="window-tool-bar-left">
          {window.electron.is.macos && (
            <div className="mac-btn close" onClick={onClose} />
          )}
          {window.electron.is.macos && (
            <div className="mac-btn min" onClick={this.minimizeWindow} />
          )}
          {/*{is.macos && <div className="mac-btn max" />}*/}
        </div>
        <div className="window-tool-bar-title">{children}</div>
        <div className="window-tool-bar-right">
          {window.electron.is.windows && (
            <div className="btn" onClick={this.minimizeWindow}>
              <MinusOutlined />
            </div>
          )}
          {window.electron.is.windows && (
            <div className="btn close" onClick={onClose}>
              <CloseOutlined />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default WindowToolBar;
