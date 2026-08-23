import AppScreen from "@/components/app/AppScreen";
import PlaceholderCard from "@/components/app/PlaceholderCard";

export default function OffersPage() {
  return (
    <AppScreen
      eyebrow="Ưu đãi"
      title="Đặc quyền W°"
      description="Không gian dành cho ưu đãi và quyền lợi thành viên sẽ được mở ra tại đây."
    >
      <PlaceholderCard label="W° membership" title="Tích luỹ những lần ghé thăm" description="Ưu đãi thành viên đang được chuẩn bị với cùng sự tinh tế như từng ly nước." />
    </AppScreen>
  );
}
