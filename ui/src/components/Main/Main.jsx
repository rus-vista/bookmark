import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import React from "react"
import {useStyles} from "./style"
import {connect} from "react-redux"
import {getBookmarks} from "selectors/bookmark"
import {deleteBookmark} from "action/bookmark"

export const Main = (props) => {
  const {bookmarks} = props
  const classes = useStyles()
  const handleDelete = (event) => {
    const {currentTarget: {dataset: {pk}}} = event
    props.deleteBookmark(pk)
  }
  return (
    <main>
      {/* Hero unit */}
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {bookmarks.map(bookmark => (
            <Grid item key={bookmark.pk} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={bookmark.image}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {bookmark.title}
                  </Typography>
                  <Typography>
                    {bookmark.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href={bookmark.url}>
                    Open
                  </Button>
                  <Button size="small" color="primary" data-pk={bookmark.pk} onClick={handleDelete}>
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  )
}

const mapStateToProps = (state) => ({
  bookmarks: getBookmarks(state),
})

const mapDispatchToProps = {
  deleteBookmark,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main)
