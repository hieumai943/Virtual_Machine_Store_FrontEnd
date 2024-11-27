import React , { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Star } from 'lucide-react'
import { Link } from 'react-router-dom';
import './Home.css'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const xpra_screen = require('../Assets/xpra_screen.png');
const addition = require('../Assets/addition.png');
const authentication = require('../Assets/authentication.png');
const { NewsLetter } = require('../NewsLetter/NewsLetter');

const vmDemos = [
  { id: 1, name: 'Linux VM', image: xpra_screen, description: 'Friendly, versatile interface' },
  { id: 2, name: 'Feature', image: addition, description: 'Reasonable and stable design' },
  { id: 3, name: 'Security', image: authentication, description: 'High performance, absolute security' },
]

const monthlyDeals = [
  { id: 1, name: 'Starter Package', price: '3$/month', features: ['2 CPU', '2GB RAM', '20GB SSD'] },
  { id: 2, name: 'Pro Package', price: '8$/month', features: ['4 CPU', '8GB RAM', '100GB SSD', , 'Backup every week'] },
  { id: 3, name: 'Enterprise Package', price: '12$/month', features: ['8 CPU', '32GB RAM', '500GB SSD', 'Backup everyday', 'Support 24/7'] },
]

const userFeedbacks = [
  { id: 1, name: 'Jack Hanma', comment: 'Great virtual machine service, stable speed and fast technical support!', rating: 5, avatar: '/placeholder.svg?height=50&width=50' },
  { id: 2, name: 'Hanma baki', comment: 'Reasonable price, many service packages to choose from. Very satisfied with the experience.', rating: 4, avatar: '/placeholder.svg?height=50&width=50' },
  { id: 3, name: 'Nobi Nobita', comment: 'Professional support team, quick problem solving. Continuing to use long term.', rating: 5, avatar: '/placeholder.svg?height=50&width=50' },
]


export const Home = () => {
  const [hasToken, setHasToken] = useState(false);

useEffect(() => {
  const token = localStorage.getItem('token');
  setHasToken(!!token); // Convert token to boolean
}, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Welcome to my Linux virtual machines store</h1>

      <section className="mb-16">
        {/* <h2 className="text-2xl font-semibold mb-6">Virtual Machine Demo</h2> */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="rounded-lg overflow-hidden"
        >
          {vmDemos.map((demo) => (
            <SwiperSlide key={demo.id}>
              <div className="relative">
                <img src={demo.image} alt={demo.name} className="w-full h-[400px] object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h2 className="text-xl font-semibold">{demo.name}</h2>
                  <p>{demo.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="mb-16 animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-6">Hot Deals This Month</h2>
        <div class="flex-container">
          {monthlyDeals.map((deal) => (
            <div key={deal.id} className="bg-white p-6 rounded-lg shadow-custom transition-all hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">{deal.name}</h3>
              <p className="text-lg font-bold text-blue-600 mb-4">{deal.price}</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                {deal.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              
              <Link to={hasToken ? '/store' : '/login'}>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
          {hasToken ? 'Go to Store' : 'Register'}
        </button>
      </Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Review from customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {userFeedbacks.map((feedback) => (
            <div key={feedback.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
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
      <div className='newsletterlast'>
      <NewsLetter />

      </div>
    </div>
    
    
  )
}