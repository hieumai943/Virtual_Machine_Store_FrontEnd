import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Star } from 'lucide-react'
import './Home.css'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const vmDemos = [
  { id: 1, name: 'Máy ảo Linux', image: '/placeholder.svg?height=400&width=600', description: 'Hiệu suất cao, bảo mật tuyệt đối' },
  { id: 2, name: 'Máy ảo Windows', image: '/placeholder.svg?height=400&width=600', description: 'Giao diện thân thiện, đa năng' },
  { id: 3, name: 'Máy ảo MacOS', image: '/placeholder.svg?height=400&width=600', description: 'Thiết kế đẹp, ổn định' },
]

const monthlyDeals = [
  { id: 1, name: 'Gói Starter', price: '99.000đ/tháng', features: ['2 CPU', '2GB RAM', '20GB SSD', 'Băng thông không giới hạn'] },
  { id: 2, name: 'Gói Pro', price: '199.000đ/tháng', features: ['4 CPU', '8GB RAM', '100GB SSD', 'Băng thông không giới hạn', 'Backup hàng tuần'] },
  { id: 3, name: 'Gói Enterprise', price: '499.000đ/tháng', features: ['8 CPU', '32GB RAM', '500GB SSD', 'Băng thông không giới hạn', 'Backup hàng ngày', 'Hỗ trợ 24/7'] },
]

const userFeedbacks = [
  { id: 1, name: 'Nguyễn Văn A', comment: 'Dịch vụ máy ảo tuyệt vời, tốc độ ổn định và hỗ trợ kỹ thuật nhanh chóng!', rating: 5, avatar: '/placeholder.svg?height=50&width=50' },
  { id: 2, name: 'Trần Thị B', comment: 'Giá cả hợp lý, nhiều gói dịch vụ để lựa chọn. Rất hài lòng với trải nghiệm sử dụng.', rating: 4, avatar: '/placeholder.svg?height=50&width=50' },
  { id: 3, name: 'Lê Văn C', comment: 'Đội ngũ hỗ trợ chuyên nghiệp, giải quyết vấn đề nhanh chóng. Sẽ tiếp tục sử dụng lâu dài.', rating: 5, avatar: '/placeholder.svg?height=50&width=50' },
]
export const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Chào mừng đến với Dịch vụ Máy ảo của chúng tôi</h1>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Demo Máy ảo</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="rounded-lg overflow-hidden"
        >
          {vmDemos.map((demo) => (
            <SwiperSlide key={demo.id}>
              <div className="relative">
                <img src={demo.image} alt={demo.name} className="w-full h-[400px] object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h3 className="text-xl font-semibold">{demo.name}</h3>
                  <p>{demo.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Ưu đãi Hấp dẫn Tháng này</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {monthlyDeals.map((deal) => (
            <div key={deal.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{deal.name}</h3>
              <p className="text-lg font-bold text-blue-600 mb-4">{deal.price}</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                {deal.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                Đăng ký ngay
              </button>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-6">Phản hồi từ Khách hàng</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {userFeedbacks.map((feedback) => (
            <div key={feedback.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img src={feedback.avatar} alt={feedback.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">{feedback.name}</h4>
                  <div className="flex">
                    {[...Array(feedback.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{feedback.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}