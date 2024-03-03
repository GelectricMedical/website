import requests
from bs4 import BeautifulSoup

def extract_data_from_url(url):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')

            # Extract relevant information (title, description, image)
            title = soup.title.text.strip()
            description = soup.find('meta', attrs={'name': 'description'})['content'].strip() if soup.find('meta', attrs={'name': 'description'}) else "No Description"
            image = soup.find('meta', attrs={'property': 'og:image'})['content'] if soup.find('meta', attrs={'property': 'og:image'}) else ""

            return {'title': title, 'description': description, 'image': image}
        else:
            print(f"Failed to fetch URL: Status Code {response.status_code}")
            return None
    except Exception as e:
        print(f"Error fetching URL: {e}")
        return None

def generate_summary_card_html(data):
    html_content = f'''<div class="advisor-preview">
<img src="{data['image']}" alt="{data['title']}">
<h3>{data['title']}</h3>
<p>{data['description']}</p>
<a href="{url}" class="advisor-link">Read more</a>
</div>
'''
    return html_content

def save_html_to_file(html_content, output_file):
    try:
        with open(output_file, 'w') as f:
            f.write(html_content)
        print(f"Summary card saved successfully to '{output_file}'")
    except Exception as e:
        print(f"Error saving summary card: {e}")

if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Generate summary card from URL")
    parser.add_argument("url", help="URL of the webpage")
    parser.add_argument("output_file", help="Output HTML file name")
    args = parser.parse_args()

    url = args.url
    output_file = args.output_file

    data = extract_data_from_url(url)
    if data:
        html_content = generate_summary_card_html(data)
        save_html_to_file(html_content, output_file)
