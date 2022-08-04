import Post from '../Post/'

const Article = () => {
  return (
    <section className="container">
        <h3>Article</h3>
        <div className="mt-5 container-post">
        <Post subtitle="tecnologia" title="O guia definitivo sobre o blog">
        Mussum Ipsum, cacilds vidis litro abertis. 
        Quem num gosta di mé, boa gentis num é.
        A ordem dos tratores não altera o pão duris.
        In elementis mé pra quem é amistosis quis leo.
        Cevadis im ampola pa arma uma pindureta.
        </Post>
        <Post subtitle="fotografia" title="Quais as melhores câmeras em 2021">
        Mussum Ipsum, cacilds vidis litro abertis. 
        Quem num gosta di mé, boa gentis num é.
        A ordem dos tratores não altera o pão duris.
        In elementis mé pra quem é amistosis quis leo.
        Cevadis im ampola pa arma uma pindureta.
        </Post>
        <Post subtitle="cinema" title="Os 10 filmes com maiores bilheterias">
        Mussum Ipsum, cacilds vidis litro abertis. 
        Quem num gosta di mé, boa gentis num é.
        A ordem dos tratores não altera o pão duris.
        In elementis mé pra quem é amistosis quis leo.
        Cevadis im ampola pa arma uma pindureta.
        </Post>

        </div>
    </section>
  );
}

export default Article;