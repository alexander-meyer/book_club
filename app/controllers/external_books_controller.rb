class ExternalBooksController < ApplicationController
  def index
    @books = HardcoverApiService.fetch_books
    render json: @books
  end
end