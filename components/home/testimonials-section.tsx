import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">O que nossos clientes dizem</h2>
          <p className="text-lg text-gray-600">
            Milhares de pessoas já utilizaram nossa plataforma para comprar e vender milhas. 
            Confira o que eles têm a dizer sobre sua experiência.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center bg-white px-6 py-3 rounded-full shadow-md">
            <span className="text-xl font-bold text-primary mr-3">4.9</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className={`h-5 w-5 ${star === 5 ? 'text-gray-300' : 'text-yellow-400'} ${star === 5 ? 'fill-gray-300' : 'fill-yellow-400'}`} 
                />
              ))}
            </div>
            <span className="ml-3 text-gray-600">Baseado em mais de 500 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

function TestimonialCard({ name, role, content, rating, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6">"{content}"</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="h-12 w-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  )
}

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Viajante Frequente",
    content: "Já utilizei o MMAHUB diversas vezes para vender minhas milhas e sempre tive uma experiência excelente. O pagamento é rápido e as taxas são realmente as melhores do mercado.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    name: "Ana Oliveira",
    role: "Empresária",
    content: "Como viajo muito a trabalho, acumulo muitas milhas que não consigo usar. O MMAHUB me ajudou a transformar essas milhas em dinheiro de forma segura e rápida.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    name: "Marcos Santos",
    role: "Influenciador de Viagens",
    content: "Recomendo o MMAHUB para todos os meus seguidores. A plataforma é intuitiva, o processo é transparente e o suporte ao cliente é excepcional.",
    rating: 4,
    image: "/placeholder-user.jpg"
  }
] 