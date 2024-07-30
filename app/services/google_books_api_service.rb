class GoogleBooksApiService
  API_KEY = ENV["GOOGLE_CLOUD_API_KEY"]

  def self.search_books(query)
    conn = Faraday.new(
      url: "https://www.googleapis.com/books/v1/volumes",
      params: { key: API_KEY, q: query },
      headers: {
        "Content-Type": "application/json",
      }
    )

    response = conn.get("")

    JSON.parse(response.body)["items"]
  end
end