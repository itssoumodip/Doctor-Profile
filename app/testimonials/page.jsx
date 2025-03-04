import { TestimonialCard } from "@/components/testimonial-card"
import { TestimonialSlider } from "@/components/testimonial-slider"

export default function TestimonialsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900 animate-fade-in">
              Patient Testimonials
            </h1>
            <p className="max-w-[700px] text-gray-600 md:text-xl animate-fade-in animation-delay-200">
              Hear what our patients have to say about their experience
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials Slider */}
      <section className="w-full py-12 md:py-24 bg-blue-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl animate-fade-in">Featured Testimonials</h2>
            <p className="max-w-[700px] text-blue-100 md:text-xl animate-fade-in animation-delay-200">
              Stories from patients whose lives have been transformed
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900 animate-fade-in">
              More Patient Stories
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl animate-fade-in animation-delay-200">
              Read more detailed accounts from our patients
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="NAME"
              age="AGE"
              condition="MEDICAL CONDITION"
              quote="PATIENT MESSAGE - lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi"
              image="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              rating={5}
              detailed
            />
            <TestimonialCard
              name="NAME"
              age="AGE"
              condition="MEDICAL CONDITION"
              quote="PATIENT MESSAGE - lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi"
              image="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              rating={5}
              detailed
            />
            <TestimonialCard
              name="NAME"
              age="AGE"
              condition="MEDICAL CONDITION"
              quote="PATIENT MESSAGE - lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi"
              image="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              rating={5}
              detailed
            />
            <TestimonialCard
              name="NAME"
              age="AGE"
              condition="MEDICAL CONDITION"
              quote="PATIENT MESSAGE - lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi"
              image="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              rating={5}
              detailed
            />
            <TestimonialCard
              name="NAME"
              age="AGE"
              condition="MEDICAL CONDITION"
              quote="PATIENT MESSAGE - lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi"
              image="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              rating={5}
              detailed
            />
            <TestimonialCard
              name="NAME"
              age="AGE"
              condition="MEDICAL CONDITION"
              quote="PATIENT MESSAGE - lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi"
              image="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              rating={5}
              detailed
            />
            <TestimonialCard
              name="NAME"
              age="AGE"
              condition="MEDICAL CONDITION"
              quote="PATIENT MESSAGE - lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi"
              image="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              rating={5}
              detailed
            />
            <TestimonialCard
              name="NAME"
              age="AGE"
              condition="MEDICAL CONDITION"
              quote="PATIENT MESSAGE - lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi"
              image="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              rating={5}
              detailed
            />
            <TestimonialCard
              name="NAME"
              age="AGE"
              condition="MEDICAL CONDITION"
              quote="PATIENT MESSAGE - lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi"
              image="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              rating={5}
              detailed
            />
           
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900 animate-fade-in">
              Testimonials
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl animate-fade-in animation-delay-200">
              Watch our patients share their experiences
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* These would be actual video players in a real implementation */}
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-md flex items-center justify-center animate-fade-in animation-delay-300">
              <div className="text-gray-500"><img src="https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds" alt="1" /></div>
            </div>
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-md flex items-center justify-center animate-fade-in animation-delay-400">
              <div className="text-gray-500"><img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="2" /></div>
            </div>
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-md flex items-center justify-center animate-fade-in animation-delay-500">
              <div className="text-gray-500"><img src="https://plus.unsplash.com/premium_photo-1682145291930-43b73e27446e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="3" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Your Story */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900 animate-fade-in">
              Share Your Story
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl animate-fade-in animation-delay-200">
              We'd love to hear about your experience with Dr. Johnson
            </p>
          </div>
          <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-xl shadow-sm animate-fade-in animation-delay-300">
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Your Email"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="testimonial" className="text-sm font-medium text-gray-700">
                  Your Story
                </label>
                <textarea
                  id="testimonial"
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Share your experience with Dr. Johnson"
                ></textarea>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="text-yellow-400 hover:text-yellow-500 focus:outline-none transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
              >
                Submit Your Story
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

