import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

type Props = {
    img: string;
    title: string;
    subtitle: string;
    description: string;
    quantity: string;
};

const style = {
    maxHeight: "inherit",
};

function ProductCard({ img, title, subtitle, description, quantity }: Props) {
    return (
        <Card className="bg-gray-950" sx={{ maxWidth: 345 }}>
            <CardMedia
            className="h-65"
                sx={style}
                component="img"
                height="140"
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                    ${subtitle}
                </Typography>
                <Typography
                    gutterBottom
                    sx={{ color: "text.secondary", fontSize: 14 }}>
                    Available: {quantity}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">ADD TO CART</Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard;
