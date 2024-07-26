class HardcoverApiService
  def self.fetch_books
    conn = Faraday.new(
      url: 'https://api.hardcover.app/v1/graphql',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer #{ENV["HARDCOVER_API_KEY"]}"
      }
    )

    response = conn.post("") do |req|
      req.body = {
        query: <<-GRAPHQL
          {
            books {
              title
              contributions {
                author {
                  name
                }
              }
              description
            }
          }
        GRAPHQL
      }.to_json
    end

    parsed_books = JSON.parse(response.body)["data"]["books"]
    format_books(parsed_books)
  end

  private

  def self.format_books(books)
    books.map { |book|
      authors = book["contributions"].map { |contribution| contribution["author"]["name"] }.join(", ")
      { title: book["title"], authors: authors, descripion: book["description"] }
    }
  end
end