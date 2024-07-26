Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  resources :books

  get "external_books", to: "external_books#index"

  # Defines the root path route ("/")
  # root "posts#index"
end
