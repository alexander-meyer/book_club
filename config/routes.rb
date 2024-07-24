Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  resources :books

  # Defines the root path route ("/")
  # root "posts#index"
end
