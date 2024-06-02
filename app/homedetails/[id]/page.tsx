import Image from "next/image";

export default function HomeDetailsPage({ searchParams }) {
  const record = JSON.parse(searchParams?.record);
  const defaultImageUrl =
    record.image || `https://picsum.photos/250/250?random=${getRandomNumber()}`;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div>Listing for: {record?.listing_name}</div>
      <Image
        src={defaultImageUrl}
        alt={record?.listing_name}
        width={400}
        height={400}
      />
      <div>Price: {record?.price}</div>
      <div>Listing agent: {record?.agent}</div>
    </div>
  );
}
