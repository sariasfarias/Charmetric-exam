select a.user_id , u.username , u.email , a.id as artist_id , a.tagline , t.name  as track_name, t.isrc  as track_isrc 
from artists a 
join users u on u.id = a.user_id 
left join tracks t on t.artist_id = a.id;