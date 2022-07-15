const extractId = (url: string): string => {
  // the [book.url, '0'] is only for typescript as we know it will never be null
  return (url.match(/https:\/\/(www\.)?anapioficeandfire\.com\/api\/.*\/(\d+)/) || [url, 'www', '0'])[2]
};

export default extractId;