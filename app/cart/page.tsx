import AppScreen from "@/components/app/AppScreen";
import PlaceholderCard from "@/components/app/PlaceholderCard";

export default function CartPage() {
  return (
    <AppScreen
      eyebrow="Giỏ hàng"
      title="Đơn của bạn"
      description="Các món bạn chọn sẽ xuất hiện ở đây trước khi xác nhận đơn."
    >
      <PlaceholderCard label="Chưa có món nào" title="Bắt đầu một lựa chọn mới" description="Đi đến mục Đặt nước để khám phá thực đơn W BYLOCOFFEE." />
    </AppScreen>
  );
}
