import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
// const axios = require("axios").default;

export class News extends Component {
  // res = axios.get(
  //   "https://newsapi.org/v2/top-headlines?apiKey=6366f0d471b74a42a3252cfa486ff2dc&q=cricket"
  // );

  constructor() {
    // console.log("constructor");
    super();
    this.state = {
      articles: [],
      page: 1,
      totalResults: 1,
      loading: false,
    };
  }

  async componentDidMount() {
    // console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6366f0d471b74a42a3252cfa486ff2dc&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    // console.log(this.state.totalResults);
  }

  render() {
    // console.log("render");

    return (
      <div className="container my-3">
        <h2 id="heading">Newskeeda - Top headlines : </h2>
        {this.state.loading && <Spinner />}

        {/* <div className="roww my-4">
          <NewsItem
            src="https://cdn.24.co.za/files/Cms/General/d/2951/ee9ad5052aba46e6889b4d1e8eb3d079.jpg"
            title="Proteas name 16-man squad for Bangladesh ODIs, Magala and Nortje sidelined"
            description="Cricket SA has named a 16-man Proteas squad for the upcoming home ODI series against Bangladesh."
            url="https://www.news24.com/sport/Cricket/Proteas/proteas-name-16-man-squad-for-bangladesh-odis-magala-and-nortje-sidelined-20220308"
          />
          <NewsItem
            src="https://cdn.24.co.za/files/Cms/General/d/2951/ee9ad5052aba46e6889b4d1e8eb3d079.jpg"
            title="Proteas name 16-man squad for Bangladesh ODIs, Magala and Nortje sidelined"
            description="Cricket SA has named a 16-man Proteas squad for the upcoming home ODI series against Bangladesh."
            url="https://www.news24.com/sport/Cricket/Proteas/proteas-name-16-man-squad-for-bangladesh-odis-magala-and-nortje-sidelined-20220308"
          />
          <NewsItem
            src="https://cdn.24.co.za/files/Cms/General/d/2951/ee9ad5052aba46e6889b4d1e8eb3d079.jpg"
            title="Proteas name 16-man squad for Bangladesh ODIs, Magala and Nortje sidelined"
            description="Cricket SA has named a 16-man Proteas squad for the upcoming home ODI series against Bangladesh."
            url="https://www.news24.com/sport/Cricket/Proteas/proteas-name-16-man-squad-for-bangladesh-odis-magala-and-nortje-sidelined-20220308"
          />
        </div> */}
        <div className="roww my-4">
          {!this.state.loading &&
            this.state.articles.map((news) => {
              return (
                <NewsItem
                  key={news.url}
                  src={
                    news.urlToImage
                      ? news.urlToImage
                      : "https://scontent.fknu1-2.fna.fbcdn.net/v/t1.6435-9/54730347_10155742932017303_6045279555608903680_n.png?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=v5YWaGwKX48AX_1_Ucu&_nc_ht=scontent.fknu1-2.fna&oh=00_AT-LbFjPZMWDo8k1qD4iVOr4H-jB_IKAYGHJAvs5SrwKMQ&oe=624FC3F6"
                  }
                  title={
                    news.title
                      ? !news.description
                        ? news.title
                        : news.title.slice(0, 45) + "..."
                      : ""
                  }
                  description={
                    news.description
                      ? !news.title
                        ? news.description
                        : news.description.slice(0, 88) + "..."
                      : ""
                  }
                  url={news.url}
                />
              );
            })}
        </div>

        <div className="buttonsContainer">
          <button
            disabled={this.state.page <= 1}
            type="button"
            onClick={this.handlePrevPage}
            className="btn btn-outline-dark"
          >
            Previous page {" <<"}{" "}
          </button>
          <button
            disabled={
              this.state.page ===
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            id="nextBtn"
            type="button"
            onClick={this.handleNextPage}
            className="btn btn-outline-dark"
          >
            Next page {" >>"}
          </button>
        </div>
      </div>
    );
  }

  handlePrevPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6366f0d471b74a42a3252cfa486ff2dc&page=${this
      .state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNextPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6366f0d471b74a42a3252cfa486ff2dc&page=${this
      .state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
}

export default News;
