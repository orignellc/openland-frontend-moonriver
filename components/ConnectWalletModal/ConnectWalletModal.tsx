import { FC } from "react";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";

interface ConnectionCardProps {
  connectionImg: string;
  providerName: string;
}

const ConnectionCard: FC<ConnectionCardProps> = (props) => {
  const { connectionImg, providerName } = props;
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  const metamaskConnector = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
  });

  const connectToMetamask = async () => {
    try {
      const wallet = await activate(metamaskConnector);
      console.log("THE CONNECTED WALLET", wallet);
    } catch (error) {
      console.log("THE CONNECTION ERROR", error);
    }
  };

  return (
    <div
      onClick={connectToMetamask}
      className="w-full border-[0.5px] mb-2 border-[#999999] cursor-pointer rounded-xl flex px-5 items-center lg:px-[94px] py-5 lg:py-[57px]"
    >
      <img
        src={connectionImg}
        alt={providerName}
        className="lg:w-[76px] w-[48px] h-[47px] lg:h-[74px] mr-[55px]"
      />
      <p className="font-medium text-xs lg:text-2xl">{providerName}</p>
    </div>
  );
};

interface ConnectWalletModalProps {
  toggleConnectWalletModal: () => void;
}

const ConnectWalletModal: FC<ConnectWalletModalProps> = (props) => {
  const { toggleConnectWalletModal } = props;

  return (
    <div className="bg-white px-[30px] py-[34px] lg:px-[70px] border rounded-3xl w-[344px] lg:w-[933px]">
      <div className="w-full flex justify-between items-center mb-[60px]">
        <div className="flex items-start flex-col text-left">
          <h3 className="font-semibold text-[19px] lg:text-[42px] mb-3">
            Connect your wallet
          </h3>
          <p className="font-medium text-[11.5px] lg:text-xl">
            Connect with any of these available wallet providers
          </p>
        </div>
        <div onClick={toggleConnectWalletModal}>
          <img
            src="/assets/images/svg/cancel.svg"
            alt="cancel"
            className="cursor-pointer"
          />
        </div>
      </div>

      <ConnectionCard
        connectionImg="/assets/images/svg/metamask.svg"
        providerName="MetaMask"
      />
      <ConnectionCard
        connectionImg="/assets/images/svg/binance.svg"
        providerName="Binance Chain Wallet"
      />
      <ConnectionCard
        connectionImg="/assets/images/svg/wallet-connect.svg"
        providerName="WalletConnect"
      />
    </div>
  );
};

export default ConnectWalletModal;
