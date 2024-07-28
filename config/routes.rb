Rails.application.routes.draw do
  # get 'posts/index'
  # root 'dashboard#index'
  root 'posts#index'
  resources :posts, only: [:index]
end
