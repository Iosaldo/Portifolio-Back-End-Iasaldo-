import Image from "next/image";

const ICON_SRC = "/icons/certificate-flaticon.png";

export default function CertificateIcon({ size = 24, className = "" }) {
  return (
    <Image
      src={ICON_SRC}
      alt=""
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    />
  );
}
