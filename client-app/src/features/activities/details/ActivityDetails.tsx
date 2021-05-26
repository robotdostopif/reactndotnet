import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import ActivityDetailedHeader from '../details/ActivityDetailedHeader';
import ActivityDetailedInfo from '../details/ActivityDetailedInfo';
import ActivityDetailedChat from '../details/ActivityDetailedChat';
import ActivityDetailedSidebar from '../details/ActivityDetailedSidebar';


export default observer(function ActivityDetails() {

  const {activityStore} = useStore();
  const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
  const {id} = useParams<{id: string}>();

  useEffect(() => {
    if(id) loadActivity(id);
  }, [id, loadActivity]);

  if(loadingInitial || !activity) return <LoadingComponent />;
    return (
      <Grid>
        <Grid.Column width={10}>
          <ActivityDetailedHeader activity={activity} />
          <ActivityDetailedInfo activity={activity}/>
          <ActivityDetailedChat />
        </Grid.Column>
        <Grid.Column width={8}>
          <ActivityDetailedSidebar/>
        </Grid.Column>
      </Grid>
    )

})