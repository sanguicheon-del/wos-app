import AppScreen from "@/components/app/AppScreen";
import PlaceholderCard from "@/components/app/PlaceholderCard";

export default function MenuPage() {
  return (
    <AppScreen
      eyebrow="Đặt nước"
      title="Thực đơn của W°"
      description="Chọn món yêu thích. Trải nghiệm đặt nước sẽ được hoàn thiện trong bước tiếp theo."
    >
      <div className="space-y-3">
        <PlaceholderCard label="Signature" title="Matcha & Tea" description="Những lớp hương vị trong trẻo, được tạo nên từ nguyên liệu chọn lọc." />
        <PlaceholderCard label="Coming soon" title="Coffee & Seasonal" description="Danh mục món và tuỳ chọn sẽ sớm xuất hiện tại đây." />
      </div>
    </AppScreen>
  );
}
