import AppScreen from "@/components/app/AppScreen";
import PlaceholderCard from "@/components/app/PlaceholderCard";

export default function AccountPage() {
  return (
    <AppScreen
      eyebrow="Tài khoản"
      title="Không gian của bạn"
      description="Thông tin hồ sơ và sở thích sẽ được cá nhân hoá trong những phiên bản tiếp theo."
    >
      <PlaceholderCard label="W° account" title="Chào mừng bạn đến với Atelier" description="Chức năng tài khoản chưa được kích hoạt trong giai đoạn xây dựng ứng dụng ban đầu." />
    </AppScreen>
  );
}
