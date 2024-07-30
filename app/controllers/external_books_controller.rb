class ExternalBooksController < ApplicationController
  def index
    query = params[:q] || ""
    @books = GoogleBooksApiService.search_books(query)
    render json: @books
  end
end